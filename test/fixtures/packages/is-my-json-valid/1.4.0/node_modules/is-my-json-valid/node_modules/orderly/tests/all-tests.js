#!/usr/bin/env narwhal

var fs = require("fs"),
    path = require("path"),
    assert = require("assert"),
    parser = require("../dist/parser").parser;

// set parser's shared scope
parser.yy = require("../dist/scope");

exports["test empty object"] = function () {
    var orderly = "object { };";
    assert.deepEqual(parser.parse(orderly), {"type": "object", "required": true});
};
exports["test empty array"] = function () {
    var orderly = "array { };";
    assert.deepEqual(parser.parse(orderly), {"type": "array", "required": true});
};
exports["test // comment"] = function () {
    var orderly = "// comment \nobject { string foo };";
    assert.ok(parser.parse(orderly));
};
exports["test # comment"] = function () {
    var orderly = "# comment \nobject { string foo };";
    assert.ok(parser.parse(orderly));
};

// positive test cases
var posdir = path.join(__dirname, "positive_cases");
var ppath = fs.readdirSync(posdir);
ppath.forEach(function (f, i, e) {
    if (f.match(/orderly$/)) {
        exports["test positive_cases/"+f] = function () {
            var parsed = parser.parse(fs.readFileSync(path.join(posdir, f),"utf8"));
            var schema = fs.readFileSync(path.join(posdir, f.replace(/orderly$/, 'jsonschema')), "utf8");
            assert.deepEqual(parsed, JSON.parse(schema));
        };
    }
});

// negative test cases
var negdir = path.join(__dirname, "negative_cases");
var npath = fs.readdirSync(negdir);
npath.forEach(function (f, i, e) {
    if (f.match(/orderly$/)) {
        exports["test negative_cases/"+f] = function () {
            assert["throws"](function () { parser.parse(fs.readFileSync(path.join(negdir, f), "utf8")); });
        };
    }
});

if (require.main === module)
    require("test").run(exports);
