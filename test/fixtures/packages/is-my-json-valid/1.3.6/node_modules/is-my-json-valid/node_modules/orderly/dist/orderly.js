var parser = require("./parser").parser;
// set parser's shared scope
parser.yy = require("./scope");

// returns the JSON object
var parse = exports.parse = function (input) {
    return parser.parse(input);
};

// returns the stringified JSON object
var compile = exports.compile = function (input, indent) {
    return JSON.stringify(parse(input), null, indent||"    ");
};

exports.main = function main (args) {
    var fs = require("file"),
        cwd = fs.path(fs.cwd());
    if (!args[1]) {
        throw new Error("Usage: " + args[0] + " FILE [OUTFILE]");
    }
    var orderly = cwd.join(args[1]).read({charset: "utf-8"}),
        source = compile(orderly),
        stream = cwd.join(args[2] || fs.basename(args[1], ".orderly")+".jsonschema").open("w");
    stream.print(source).close();
};
