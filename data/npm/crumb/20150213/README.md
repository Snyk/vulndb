## Overview
[`crumb`](https://www.npmjs.com/package/crumb) is CSRF crumb generation and validation plugin.

Affected versions of the package are vulnerable to Authentication Bypass. `crumb` does not validate the hostname while comparing a request origin against the whitelist, but rather compare http protocol alone. This opens a window for attackers to gain information by Man in the Middle (MitM) attacks.

## Remediation
Upgrade `crumb` to version 4.0.2 or higher.

## References
- [Github PR](https://github.com/hapijs/crumb/pull/46)
- [Github Commit](https://github.com/hapijs/crumb/commit/95805d643fd79c7a4b7c1b06bb8b5a9c3e11863c)
