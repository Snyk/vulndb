## Overview
[`guard-livereload`](https://rubygems.org/gems/guard-livereload) is a gem that automatically reloads your browser when 'view' files are modified.
Affected versions of the package are vulnerable to Directory Traversal. Malicious users may be able to craft HTTP GET requests to retrieve the contents of any file on the server, like `./../../etc/passwd`.

## Remediation
Upgrade `guard-livereload` to version 2.5.2 or higher.

## References
- [GitHub PR](https://github.com/guard/guard-livereload/pull/158)
- [GitHub Issue](https://github.com/guard/guard-livereload/issues/159)
- [GitHub Commit](https://github.com/guard/guard-livereload/commit/0e98469e6b9d81a5bd415781534a23d087c271f8)
