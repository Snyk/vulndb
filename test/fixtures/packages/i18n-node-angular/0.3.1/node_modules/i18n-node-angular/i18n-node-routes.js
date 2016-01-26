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
 * Created: 2014-01-21 19:40
 *
 * @author Oliver Salzburg
 * @copyright Copyright (C) 2014, Oliver Salzburg
 * @license http://opensource.org/licenses/mit-license.php MIT License
 */

var i18n = require( "i18n" );

var configuration = {
  directory : "locales/",
  extension : ".json"
};

/**
 * Configure the express routes through which translations are served.
 * @param app
 * @param {Object} [configObject]
 */
var configure = function( app, configObject ) {
  if( typeof configObject !== "undefined" ) {
    configuration.directory = ( typeof configObject.directory === "string" ) ? configObject.directory : configuration.directory;
    configuration.extension = ( typeof configObject.extension === "string" ) ? configObject.extension : configuration.extension;
  }

  // Register routes
  app.get( "/i18n/:locale", i18nRoutes.i18n );
  app.get( "/i18n/:locale/:phrase", i18nRoutes.translate );
};

/**
 * Middleware to allow retrieval of users locale in the template engine.
 * @param {Object} request
 * @param {Object} response
 * @param {Function} [next]
 */
var getLocale = function( request, response, next ) {
  response.locals.i18n = {
    getLocale : function() {
      return i18n.getLocale.apply( request, arguments );
    }
  };

  // For backwards compatibility, also define "acceptedLanguage".
  response.locals.acceptedLanguage = response.locals.i18n.getLocale;

  if( typeof next !== "undefined" ) {
    next();
  }
};

var i18nRoutes =
{
  /**
   * Sends a translation file to the client.
   * @param request
   * @param response
   */
  i18n : function( request, response ) {
    var locale = request.params.locale;
    response.sendfile( configuration.directory + locale + configuration.extension );
  },

  /**
   * Translate a given string and provide the result.
   * @param request
   * @param response
   */
  translate : function( request, response ) {
    var locale = request.params.locale;
    var phrase = request.params.phrase;

    var result;
    if( request.query.plural ) {
      var singular = phrase;
      var plural = request.query.plural;
      // Make sure the information is added to the catalog if it doesn't exist yet.
      i18n.__n( {singular : singular, plural : plural, locale : locale} );
      // Retrieve the translation object from the catalog and return it.
      var catalog = i18n.getCatalog(locale);
      result = catalog[singular];

    } else {
      result = i18n.__( {phrase : phrase, locale : locale} );
    }
    response.send( result );
  }
};

module.exports.configure = configure;
module.exports.getLocale = getLocale;