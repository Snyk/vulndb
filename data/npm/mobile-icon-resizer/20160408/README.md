## Overview
[`mobile-icon-resizer`](https://www.npmjs.com/package/mobile-icon-resizer) is a tool used to resize iOS and Android application icons in batch. 

Affected versions of the package are vulnerable to Arbitrary Code Injection due to unsafe use of the `eval()` function. Node.js provides the `eval()` function by default, and is used to translate strings into Javascript code. An attacker can craft a malicious payload to inject arbitrary commands.

## Remediation
Upgrade `mobile-icon-resizer` to version 0.4.3 or higher.

## References
- [GitHub Issue](https://github.com/muzzley/mobile-icon-resizer/issues/8)
- [GitHub Commit](https://github.com/muzzley/mobile-icon-resizer/commit/a6c50f884bd282d74ab77e1fce6317d5d0dd2f0f)
- [Research Paper - Understanding and Automatically Preventing Injection Attacks on Node.js](https://www.microsoft.com/en-us/research/wp-content/uploads/2017/01/nodejs_tr.pdf)
