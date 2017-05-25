## Overview
[`growl`](https://www.npmjs.com/package/growl) is a package adding Growl support for Nodejs.

Affected versions of the package are vulnerable to Arbitrary Code Injection due to unsafe use of the `eval()` function. Node.js provides the `eval()` function by default, and is used to translate strings into Javascript code. An attacker can craft a malicious payload to inject arbitrary commands.

## Remediation
Upgrade `growl` to version 1.9.3 or higher.

## References
- [GitHub Issue](https://github.com/tj/node-growl/issues/60)
- [GitHub Commit](https://github.com/DCNWS/node-growl/commit/d9f6ea2fb215ab9c5bce3e9ee88b1f0803aaf71e)
- [Research Paper - Understanding and Automatically Preventing Injection Attacks on Node.js](https://www.microsoft.com/en-us/research/wp-content/uploads/2017/01/nodejs_tr.pdf)
