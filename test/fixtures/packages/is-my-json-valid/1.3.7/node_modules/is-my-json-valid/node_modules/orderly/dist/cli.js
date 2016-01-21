#!/usr/bin/env node

var util = require('util');
var fs = require("fs");
var parserParse = require("./orderly").parse;
var options = require("nomnom")
  .scriptName("orderly")
  .opts({
    file: {
      position: 0,
      help: "file to parse; otherwise uses stdin"
    },
    version: {
      string: '-v, --version',
      help: 'print version and exit',
      callback: function() {
        return JSON.parse(fs.readFileSync(__dirname + "/../package.json", "utf8")).version;
      }
    },
    outfile : {
      string: '-o FILE, --output-file FILE',
      help: 'write output to the file'
    },
    indent : {
      string: '-t CHAR, --indent CHAR',
      default: "  ",
      help: 'character(s) to use for indentation'
    }
  })
  .parseArgs();


function parse (source) {
  try {
    var parsed = parserParse(source);
    return JSON.stringify(parsed,null,options.indent);
  } catch (e) {
    util.puts(e);
    process.exit(1);
  }
}

function main (args) {
  var source = '';
  var p = require('path');
  if (options.file) {
    var path = p.resolve(options.file);
    source = parse(fs.readFileSync(path, "utf8"));
    if (options.outfile) {
      fs.writeSync(fs.openSync(p.resolve(options.outfile),'w+'), source, 0, "utf8");
    } else {
      util.puts(source);
    }
  } else {
    var stdin = process.openStdin();
    stdin.setEncoding('utf8');

    stdin.on('data', function (chunk) {
      source += chunk.toString('utf8');
    });
    stdin.on('end', function () {
      util.puts(parse(source));
    });
  }
}

main(process.argv.slice(1));
