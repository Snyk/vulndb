// Bundles the built code base as a standalone javascript file

var bundler = require("./cjs-bundler");

function read (path) {
    return require("fs").readFileSync(path, "utf8");
}

function loadPackage (path) {
    return JSON.parse(read(path+'/package.json'));
}

function normalizeModules (mods, path) {
    var modArray = [];
    for (var mod in mods) {
        modArray.push({id: mod, path: path+'/'+mods[mod]});
    }
    return modArray;
}

function generate (path) {
    var modules = {
          "orderly.js": "dist/orderly.js",
          "parser.js": "dist/parser.js",
          "scope.js": "dist/scope.js"
        };
    var script = bundler.bundle(normalizeModules(modules, path));

    var out = "var orderly = (function() {\n" + script + ";\nreturn require('orderly');\n})();";
    require('util').puts(out);
}

var cwd = process.cwd();
generate(cwd);
