## Overview
[`protojs`](https://www.npmjs.com/package/protojs) is a ES5-compatible object manipulation library for node and modern browsers.

Affected versions of the package are vulnerable to Arbitrary Code Injection due to unsafe use of the `eval()` function. Node.js provides the `eval()` function by default, and is used to translate strings into Javascript code. An attacker can craft a malicious payload to inject arbitrary commands.

## Remediation
Upgrade `protojs` to version 1.0.6 or higher.

## References
- [Github PR](https://github.com/milojs/proto/pull/2)
- [Github Issue](https://github.com/milojs/proto/issues/1)
- [Github Commit](https://github.com/milojs/proto/pull/2/commits/10adbec293e7dfdb2e9e565bfd77187cf0373cbe)
- [Research Paper - Understanding and Automatically Preventing Injection Attacks on Node.js](https://www.microsoft.com/en-us/research/wp-content/uploads/2017/01/nodejs_tr.pdf)
