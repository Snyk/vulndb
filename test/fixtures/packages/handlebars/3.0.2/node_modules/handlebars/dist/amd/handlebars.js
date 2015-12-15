define(['exports', 'module', './handlebars.runtime', './handlebars/compiler/ast', './handlebars/compiler/base', './handlebars/compiler/compiler', './handlebars/compiler/javascript-compiler', './handlebars/compiler/visitor'], function (exports, module, _handlebarsRuntime, _handlebarsCompilerAst, _handlebarsCompilerBase, _handlebarsCompilerCompiler, _handlebarsCompilerJavascriptCompiler, _handlebarsCompilerVisitor) {
  'use strict';

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj['default'] : obj; };

  var _Handlebars = _interopRequire(_handlebarsRuntime);

  // Compiler imports

  var _AST = _interopRequire(_handlebarsCompilerAst);

  var _JavaScriptCompiler = _interopRequire(_handlebarsCompilerJavascriptCompiler);

  var _Visitor = _interopRequire(_handlebarsCompilerVisitor);

  var _create = _Handlebars.create;
  function create() {
    var hb = _create();

    hb.compile = function (input, options) {
      return _handlebarsCompilerCompiler.compile(input, options, hb);
    };
    hb.precompile = function (input, options) {
      return _handlebarsCompilerCompiler.precompile(input, options, hb);
    };

    hb.AST = _AST;
    hb.Compiler = _handlebarsCompilerCompiler.Compiler;
    hb.JavaScriptCompiler = _JavaScriptCompiler;
    hb.Parser = _handlebarsCompilerBase.parser;
    hb.parse = _handlebarsCompilerBase.parse;

    return hb;
  }

  var inst = create();
  inst.create = create;

  inst.Visitor = _Visitor;

  /*jshint -W040 */
  /* istanbul ignore next */
  var $Handlebars = global.Handlebars;
  /* istanbul ignore next */
  inst.noConflict = function () {
    if (global.Handlebars === inst) {
      global.Handlebars = $Handlebars;
    }
  };

  inst['default'] = inst;

  module.exports = inst;
});