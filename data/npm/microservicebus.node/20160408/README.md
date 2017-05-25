## Overview
[`microservicebus.node`](https://www.npmjs.com/package/microservicebus.node) is an integration platform for IoT and enterprise applications.

Affected versions of the package are vulnerable to Arbitrary Code Injection due to unsafe use of the `eval()` function. Node.js provides the `eval()` function by default, and is used to translate strings into Javascript code. An attacker can craft a malicious payload to inject arbitrary commands.

## Remediation
Upgrade `microservicebus.node` to version 0.4.3 or higher.

## References
- [GitHub Issue #1](https://github.com/microServiceBus/microservicebus.node/issues/9)
- [GitHub Issue #2](https://github.com/cristianstaicu/eval-sanitizer/issues/2)
- [Research Paper - Understanding and Automatically Preventing Injection Attacks on Node.js](https://www.microsoft.com/en-us/research/wp-content/uploads/2017/01/nodejs_tr.pdf)
