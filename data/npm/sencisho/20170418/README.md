## Overview
[`sencisho`](https://www.npmjs.com/package/sencisho) is a small http server for your local development.
Affected versions of the package are vulnerable to Directory Traversal, which may allow access to sensitive files and data on the server. For example, requesting the following url `/..%2f..%2fetc/passwd` would result in `/etc/passwd` leak.

Thanks to [Liang Gong](https://github.com/JacksonGL) for disclosing this vulnerability!

## Disclosure Timeline
- April 24th, 2017 - Disclosed to package owner
- April 24th, 2017 - Issue acknowledged by package owner.
- April 27th, 2017 - Issue fixed and version `0.3.3` released.

## Remediation
Upgrade `sencisho` to version 0.3.3 or higher.

## References
- [GitHub Commit](https://github.com/julien/sencisho/commit/4254c85823fd0bbb0e8a53dc5a8e4f126639893d)
