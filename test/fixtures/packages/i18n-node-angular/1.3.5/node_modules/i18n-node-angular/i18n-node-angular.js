/**
 * Copyright (C) 2014, Oliver Salzburg
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 * Created: 2014-01-20 21:05
 *
 * @author Oliver Salzburg
 * @copyright Copyright (C) 2014, Oliver Salzburg, HARTWIG Communication & Events
 * @license http://opensource.org/licenses/mit-license.php MIT License
 */

(function() {
	"use strict";

	var i18nModule = angular.module( "i18n", [] );

	i18nModule.provider( "i18n", function() {
		var i18nProvider = this;

		i18nProvider.objectNotation = ".";
		i18nProvider.setObjectNotation = function( delimiter ) {
			i18nProvider.objectNotation = delimiter;
		};

		/**
		 * The main i18n service which handles retrieval of the translation map sends single translation terms to the backend.
		 */
		i18nProvider.$get = [ "$rootScope", "$http", "$q", function( $rootScope, $http, $q ) {
			var i18nService = function() {

				// We use this deferred to keep track of if the last locale loading request has completed.
				this._localeLoadedDeferred = $q.defer();
				// If a lot of locale loading is requested, we collect all the promises on this stack so we can later resolve them.
				this._deferredStack = [];

				// A handy boolean that indicates if the currently requested locale was loaded.
				this.loaded = false;

				// Initialize the service with a given locale.
				this.init = function( locale ) {
					if( locale != this.userLanguage ) {
						if( this._localeLoadedDeferred ) {
							this._deferredStack.push( this._localeLoadedDeferred );
						}
						this._localeLoadedDeferred = $q.defer();
						this.loaded = false;
						this.userLanguage = locale;

						var service = this;

						$http( {
							method : "get",
							url    : "/i18n/" + locale,
							cache  : true
						} ).success( function( translations ) {
							$rootScope.i18n = translations;
							service.loaded = true;
							service._localeLoadedDeferred.resolve( $rootScope.i18n );

							while( service._deferredStack.length ) {
								service._deferredStack.pop().resolve( $rootScope.i18n );
							}

							$rootScope.$broadcast( "LOCALE_UPDATED" );
						} ).error( function( error ) {
							service._localeLoadedDeferred.reject( error );

							while( service._deferredStack.length ) {
								service._deferredStack.pop().reject( error );
							}
						} );
					}

					return this._localeLoadedDeferred.promise;
				};

				/**
				 * Syntactic sugar. Returns a promise to return the i18n service, once the translation map is loaded.
				 * @returns {defer.promise|*|promise}
				 */
				this.i18n = function() {
					var serviceDeferred = $q.defer();

					var service = this;
					this.ensureLocaleIsLoaded().then( function() {
						serviceDeferred.resolve( service );
					} );

					return serviceDeferred.promise;
				};

				/**
				 * Returns a promise to return the translation map, once it is loaded.
				 * @returns {defer.promise|*|promise}
				 */
				this.ensureLocaleIsLoaded = function() {
					return this._localeLoadedDeferred.promise;
				};

				/**
				 * Retrieve a translation object from the translation catalog, using object notation.
				 * @param {String} literal The path of the object to look up.
				 * @returns {*}
				 */
				this.getTranslationObject = function( literal ) {
					var result = literal.split( i18nProvider.objectNotation ).reduce( function( object, index ) {
						if( !object || !object.hasOwnProperty( index ) ) return null;
						return object[ index ];
					}, $rootScope.i18n );
					return result;
				};

				/**
				 * Translate a given term, using the currently loaded translation map.
				 * @param {String} name The string to translate.
				 * @returns {String} The translated string or the input, if no translation was available.
				 */
				this.__ = function( name ) {
					if( !$rootScope.i18n ) {
						return name;
					}

					var translation = $rootScope.i18n[ name ] || this.getTranslationObject( name );
					if( !translation ) {
						translation = name;

						// Temporarily store the original string in the translation table
						// to avoid future lookups causing additional GET requests to the backend.
						$rootScope.i18n[ name ] = translation;

						// Invoke the translation endpoint on the backend to cause the term to be added
						// to the translation table on the backend.
						// Additionally, store the returned, translated term in the translation table.
						// The term is very unlikely to be actually translated now, as it was most
						// likely previously unknown in the users locale, but, hey.
						$http.get( "/i18n/" + this.userLanguage + "/" + encodeURIComponent( name ) ).success( function( translated ) {
							$rootScope.i18n[ name ] = translated;
						} );
					}

					// If an implementation of vsprintf is loaded and we have additional parameters,
					// try to perform the substitution and return the result.
					if( arguments.length > 1 && typeof( vsprintf ) == "function" ) {
						translation = vsprintf( translation, Array.prototype.slice.call( arguments, 1 ) );
					}

					return translation;
				};

				/**
				 * Translate a given term and pick the singular or plural version depending on the given count.
				 * @param {Number} count The number of items, depending on which the correct translation term will be chosen.
				 * @param {String} singular The term that should be used if the count equals 1.
				 * @param {String} plural The term that should be used if the count doesn't equal 1.
				 * @returns {String} The translated phrase depending on the count.
				 */
				this.__n = function( count, singular, plural ) {
					if( !$rootScope.i18n ) {
						return singular;
					}

					var translation = $rootScope.i18n[ singular ] || this.getTranslationObject( singular );
					if( !translation ) {
						if( !plural ) {
							plural = singular;
						}

						translation = { one : singular, other : plural };

						// Temporarily store the original string in the translation table
						// to avoid future lookups causing additional GET requests to the backend.
						$rootScope.i18n[ singular ] = translation;

						// Invoke the translation endpoint on the backend to cause the term to be added
						// to the translation table on the backend.
						// Additionally, store the returned, translated term in the translation table.
						// The term is very unlikely to be actually translated now, as it was most
						// likely previously unknown in the users locale, but, hey.
						var requestUri =
							"/i18n/" +
							this.userLanguage +
							"/" +
							encodeURIComponent( singular ) +
							"?plural=" +
							encodeURIComponent( plural ) +
							"&count=" +
							encodeURIComponent( count );

						$http.get( requestUri ).success( function( translated ) {
							$rootScope.i18n[ singular ] = translated;
						} );
					}

					translation = (count == 1) ? translation.one : translation.other;

					// If an implementation of vsprintf is loaded, try to perform the substitution and return the result.
					if( typeof( vsprintf ) == "function" ) {
						translation = vsprintf( translation, [ count ] );
					}

					return translation;
				};
			};

			return new i18nService();
		} ];
	} );

	i18nModule.directive( "i18n", [ "i18n", "$rootScope", function( i18n, $rootScope ) {
		return {
			restrict : "A",
			link     : function postLink( scope, element, attributes ) {
				function updateText( literal, count ) {
					literal = literal || attributes[ "i18n" ];
					count = count || getCount();
					if( count === undefined ) {
						element.text( i18n.__( literal ) );
					} else {
						element.text( i18n.__n( count, literal ) )
					}
				}

				function getCount() {
					var countAttribute = attributes[ "count" ];
					return countAttribute && parseInt( countAttribute );
				}

				// Observe the value provided to us and update if it changes.
				attributes.$observe( "i18n", function( value ) {
					updateText( value );
				} );

				$rootScope.$on( "LOCALE_UPDATED", function() {
					updateText();
				} );
			}
		};
	} ] );

	/**
	 * The i18nLocale directive can (and should) be used to tell the i18n service which locale to use.
	 * You may just want to combine it with the ngApp directive in your DOM. For example:
	 *
	 * <html ng-app="yourApp" i18n-locale="de">
	 *
	 * The "de" part should in practice be filled by the result of the i18n.getLocale() call in your express app.
	 */
	i18nModule.directive( "i18nLocale", [ "i18n", "$rootScope", function( i18n, $rootScope ) {
		return {
			restrict : "A",
			link     : function postLink( scope, element, attributes ) {
				// Observe the value provided to us and re-initialize if it changes.
				attributes.$observe( "i18nLocale", function( value ) {
					i18n.init( value );
				} );
				// Also check if a "i18nLocale" model in the scope changes its value to indicate a desired locale change.
				$rootScope.$watch( "i18nLocale", function localeChanged( newLocale, oldLocale ) {
					if( !newLocale || newLocale == oldLocale ) return;
					i18n.init( newLocale );
				} );
			}
		};
	} ] );

	/**
	 * i18n filter to be used conveniently in templates.
	 * When looking to translate just a single phrase, pass the phrase into the filter like so:
	 *
	 *   {{"My phrase"|i18n}}
	 *
	 * When you need pluralization support, pass the count into the filter, and provide the two terms as additional arguments:
	 *
	 *   {{2|i18n:"singular":"plural"}}
	 *   {{4|i18n:"%s item":"%s items"}}
	 */
	i18nModule.filter( "i18n", [
		"i18n", function( i18n ) {
			/**
			 * Check if the given input is a number.
			 * @see http://stackoverflow.com/a/1830844/259953
			 * @param n The input to check.
			 * @returns {boolean} true if the input is a number; false otherwise.
			 */
			function isNumber( n ) {
				return !isNaN( parseFloat( n ) ) && isFinite( n );
			}

			var filter = function( input ) {
				// The first argument MUST be a literal, otherwise nothing can be translated.
				if( !arguments || !arguments.length || typeof arguments[ 0 ] === "undefined" ) {
					return "";
				}

				// If the input is a number, assume pluralization is requested.
				if( isNumber( input ) ) {
					return i18n.__n.apply( i18n, arguments );
				}
				return i18n.__.apply( i18n, arguments );
			};
			filter.$stateful = true;
			return filter;
		}
	] );
}());
