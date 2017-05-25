## Overview
[`m-log`](https://www.npmjs.com/package/m-log) is a Log Utility.

Affected versions of the package are vulnerable to Arbitrary Code Injection due to unsafe use of the `eval()` function. Node.js provides the `eval()` function by default, and is used to translate strings into Javascript code. An attacker can craft a malicious payload to inject arbitrary commands.

## Remediation
There is no fix version for `m-log`.

## References
- [Github Issue](https://github.com/m-prj/m-log/pull/1)
- [Github Commit](https://github.com/m-prj/m-log/pull/1/commits/ee1a08f25555201001dee497addeae9d1705226a)
- [Research Paper - Understanding and Automatically Preventing Injection Attacks on Node.js](https://www.microsoft.com/en-us/research/wp-content/uploads/2017/01/nodejs_tr.pdf)
