## Overview
[`mixin-pro`](https://www.npmjs.com/package/mixin-pro) is a Javascript multi-inheritance with mixin for code reuse.

Affected versions of the package are vulnerable to Arbitrary Code Injection due to unsafe use of the `eval()` function. Node.js provides the `eval()` function by default, and is used to translate strings into Javascript code. An attacker can craft a malicious payload to inject arbitrary commands.

## Remediation
Upgrade `mixin-pro` to version 0.6.7 or higher.

## References
- [GitHub Issue](https://github.com/floatinghotpot/mixin-pro/issues/1)
- [GitHub Commit](https://github.com/floatinghotpot/mixin-pro/commit/8bb355209f0a082d24b04355b3e8051a6455454f)
- [Research Paper - Understanding and Automatically Preventing Injection Attacks on Node.js](https://www.microsoft.com/en-us/research/wp-content/uploads/2017/01/nodejs_tr.pdf)
