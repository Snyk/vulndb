## Overview
[`electron`](https://www.npmjs.com/package/electron) is a framework for creating native applications with web technologies like JavaScript, HTML, and CSS. It takes care of the hard parts so you can focus on the core of your application.

Affected versions of the package would incorrectly reject certain certificates during HTTPS requests, due to a flaw in Chrome where SSL/TLS certificates are incorrectly rejected 10 weeks from the build time of `libchromiumcontent`. This could cause users to use an insecure protocol and be vulnerable to a Man-in-the-Middle (MitM) attack.

## Remediation
Upgrade `electron` to version 1.4.12 or higher.

## References
- [Electron Security Bulletin](https://electron.atom.io/blog/2016/12/09/certificate-transparency-fix)
- [Github PR](https://github.com/electron/electron/pull/8176)
- [Github Commit](https://github.com/electron/electron/commit/c751d42d1a98e9428e6bcb7992a7d495a79aec6a)
- [Github Release Notes 1.4.12](https://github.com/electron/electron/releases/tag/v1.4.12)
