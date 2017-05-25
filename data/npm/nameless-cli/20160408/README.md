## Overview
[`nameless-cli`](https://www.npmjs.com/package/nameless-cli) is a terminal based tool to manage and initialise a nameless project. 

Affected versions of the package are vulnerable to Arbitrary Code Injection due to unsafe use of the `eval()` function. Node.js provides the `eval()` function by default, and is used to translate strings into Javascript code. An attacker can craft a malicious payload to inject arbitrary commands.

## Remediation
There is no fix version for `nameless-cli`.

## References
- [GitHub Issue](https://github.com/StarmanMartin/nameless-cli/issues/2)
- [Research Paper - Understanding and Automatically Preventing Injection Attacks on Node.js](https://www.microsoft.com/en-us/research/wp-content/uploads/2017/01/nodejs_tr.pdf)
