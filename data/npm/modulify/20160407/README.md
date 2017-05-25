## Overview
[`modulify`](https://www.npmjs.com/package/modulify) helps generate nodejs modules from plain old javascript.

Affected versions of the package are vulnerable to Arbitrary Code Injection due to unsafe use of the `eval()` function. Node.js provides the `eval()` function by default, and is used to translate strings into Javascript code. An attacker can craft a malicious payload to inject arbitrary commands.

## Remediation
There is no fix version for `modulify`.

## References
- [Github Issue](https://github.com/matthewkastor/modulify/issues/2)
- [Research Paper - Understanding and Automatically Preventing Injection Attacks on Node.js](https://www.microsoft.com/en-us/research/wp-content/uploads/2017/01/nodejs_tr.pdf)
