## Overview
The JS-YAML module for Node.js contained a code execution vulnerability prior to version 2.0.5. The maintainers of JS-YAML have patched this vulnerability and, beginning in version 2.1.0, have provided a safeLoad method for parsing YAML. Developers that use this module should make sure they have upgraded and should strongly consider porting their code to use the new safeLoad method.

_Source: [Node Security Project](https://nodesecurity.io/advisories/16)_

### Details
The module allowed code execution due to a custom data-type that it defined and parsed called !!js/function. The way it would parse the data was to create a new Function object in JavaScript based on the input, which is equivalent to calling eval on the input:

```
function resolveJavascriptFunction(object /*, explicit*/) {
  /*jslint evil:true*/
  var func;

  try {
    func = new Function('return ' + object);
    return func();
  } catch (error) {
    return NIL;
  }
}
```
That meant the code snippet below, when run, would execute code instead of simply defining a function:

```
var yaml = require('js-yaml');

x = "test: !!js/function > \n  \
function f() { \n    \
console.log(1); \n  \
}();"

yaml.load(x);
```

## Remediation
Developers using the JS-YAML module should make sure that they are working with an up-to-date version and should strongly consider porting their code to use safeLoad in place of load, especially when accepting YAML derived from user input.

## References

- [Code Execution via YAML in JS-YAML Node.js Module](https://nealpoole.com/blog/2013/06/code-execution-via-yaml-in-js-yaml-nodejs-module/)
