## Overview
[`electron`](https://www.npmjs.com/package/electron) is a framework that lets you write cross-platform desktop applications.

An arbitrary code execution vulnerability was discovered in Google Chromium, affecting many versions of Electron. Any Electron app that accesses remote content is vulnerable to this exploit, regardless of whether the sandbox option is enabled.

## Remediation
Upgrade `electron` to version 1.6.14, 1.7.8 or higher.

## References
- [Electron Security Bulletin](https://electron.atom.io/blog/2017/09/27/chromium-rce-vulnerability-fix)
