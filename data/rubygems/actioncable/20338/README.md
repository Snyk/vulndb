## Overview
[`actioncable`](https://rubygems.org/gems/actioncable) is a package to structure many real-time application concerns into channels over a single WebSocket connection.
Affected versions of the package are vulnerable to Information Exposure. There is no way to filter out any sensitive data from the logs.

## Remediation
There is no fix version for `actioncable`.


## References
- [GitHub PR](https://github.com/rails/rails/pull/25090)
- [GitHub Issue](https://github.com/rails/rails/issues/25088)
- [GitHub Commit](https://github.com/rails/rails/pull/25090/commits/cd7b733561c5ddcdc3896b7a955c53a244a6f05d)
