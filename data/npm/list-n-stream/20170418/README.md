## Overview
[`list-n-stream`](https://www.npmjs.com/package/list-n-stream) is super basic dirlist and file streaming server.
Affected versions of the package are vulnerable to Directory Traversal, which may allow access to sensitive files and data on the server. For example, requesting the following url `/..%2f..%2fetc/passwd` would result in `/etc/passwd` leak.

Thanks to [Liang Gong](https://github.com/JacksonGL) for disclosing this vulnerability!

## Disclosure Timeline
- April 24th, 2017 - Disclosed to package owner
- April 24th, 2017 - Issue acknowledged by package owner.
- April 24th, 2017 - Issue fixed and version `0.0.11` released.

## Remediation
Upgrade `list-n-stream` to version 0.0.11 or higher.

## References
- [GitHub Commit](https://github.com/KoryNunn/list-n-stream/commit/99b0b40b34aaedfcdf25da46bef0a06b9c47fb59)
