## Overview
[`windows-build-tools`](https://www.npmjs.com/package/windows-build-tools) installs C++ Build Tools for Windows using npm.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

Many thanks to [Liang Gong](https://github.com/JacksonGL) for disclosing this vulnerability.

## Disclosure Timeline
- December 21st, 2016 - Reported the issue to package owner.
- December 22nd, 2016 - Issue acknowledged by package owner.
- December 22nd, 2016 - Issue fixed and version `1.0.0` released.

## Remediation
Upgrade `windows-build-tools` to version 1.0.0 or higher.

## References
- [Github Commit](https://github.com/felixrieseberg/windows-build-tools/commit/9835d33e68f2cb5e4d148e954bb3ed0221d98e90)
- [Github Release Notes](https://github.com/felixrieseberg/windows-build-tools/releases/tag/v1.0.0)
