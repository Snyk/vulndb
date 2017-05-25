## Overview
[`serialize-to-js`](https://www.npmjs.com/package/serialize-to-js) serializes objects to javascript.

Affected versions of this package are vulnerable to Arbitrary Code Execution. If untrusted user-input is passed into the `deserialize()`, attackers will be able to send a serialized JavaScript Objects with an [Immediately Invoked Function Expression (IIFE)](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression).

**Example:**
```js
var serialize = require('serialize-to-js');
var payload = '{"rce":"_$$ND_FUNC$$_function (){require(\'child_process\').exec(\'ls /\', function(error, stdout, stderr) { console.log(stdout) });}()"}';
serialize.deserialize(payload);
```

## Remediation
Upgrade `serialize-to-js` to version 1.0.0 or higher.

## References
- [Opsecx Blog](https://opsecx.com/index.php/2017/02/08/exploiting-node-js-deserialization-bug-for-remote-code-execution/)
- [GitHub Issue](https://github.com/commenthol/serialize-to-js/issues/1)
- [GitHub Commit](https://github.com/commenthol/serialize-to-js/commit/1cd433960e5b9db4c0b537afb28366198a319429)
- [Disclaimer by Package Owner](https://www.npmjs.com/package/serialize-to-js#deserialize)
