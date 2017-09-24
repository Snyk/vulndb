## Overview
[`openwhisk`](https://www.npmjs.com/package/openwhisk) is a JavaScript client library for the OpenWhisk platform.

Affected versions of the package are vulnerable to Uninitialized Memory Exposure. If an openwhisk action uses a `api_key` option with a numeric value, then uninitialized memory might be exposed by the client.

### Details
Constructing a `Buffer` class with integer `N` creates a `Buffer`
of length `N` with non zero-ed out memory.
**Example:**
```js
var x = new Buffer(100); // uninitialized Buffer of length 100
// vs
var x = new Buffer('100'); // initialized Buffer with value of '100'
```
Initializing a `options.api_key` option in such manner will cause uninitialized memory to be exposed.

#### Proof of concept by ChALkeR
```js
var openwhisk = require('openwhisk');
var options = {apihost: '127.0.0.1:1433', api_key: 50};
var ow = openwhisk(options);
ow.actions.invoke({actionName: 'sample'}).then(result => console.log(result))
```

## Remediation
Upgrade `openwhisk` to version 3.2.1 or higher.

## References
- [Github Commit](https://github.com/apache/incubator-openwhisk-client-js/commit/0e40671e75d2ec7e88fa39ef787526d4304f2aaa)
- [Github PR](https://github.com/apache/incubator-openwhisk-client-js/pull/34)
