## Overview
[`guaycuru`](https://www.npmjs.com/package/guaycuru) is a Static Web Server built on top of Node Simple Router.
Affected versions of the package are vulnerable to Directory Traversal, which may allow access to sensitive files and data on the server. For example, requesting the following url `/..%2f..%2fetc/passwd` would result in `/etc/passwd` leak.

Thanks to Liang Gong for disclosing this vulnerability!

## Disclosure Timeline
- April 24th, 2017 - Disclosed to package owner
- April 24th, 2017 - Issue acknowledged by package owner.
- April 27th, 2017 - Issue fixed and version `0.2.4` released.

## Remediation
Upgrade `guaycuru` to version 0.2.4 or higher.

## References
- [Github Commit](https://github.com/sandy98/guaycuru/commit/7b64c9cb13dca0d4ad40fd37158dbe31dd59a0d0)
