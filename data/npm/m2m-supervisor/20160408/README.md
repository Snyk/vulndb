## Overview
[`m2m-supervisor`](https://www.npmjs.com/package/m2m-supervisor) contains a set of processes that can run on an embedded processing platform.

Affected versions of the package are vulnerable to Arbitrary Code Injection due to unsafe use of the `eval()` function. Node.js provides the `eval()` function by default, and is used to translate strings into Javascript code. An attacker can craft a malicious payload to inject arbitrary commands.

## Remediation
There is no fix version for `m2m-supervisor`.

## References
- [GitHub Issue](https://github.com/numerex/m2m-supervisor/issues/1)
- [Research Paper - Understanding and Automatically Preventing Injection Attacks on Node.js](https://www.microsoft.com/en-us/research/wp-content/uploads/2017/01/nodejs_tr.pdf)
