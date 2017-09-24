## Overview
[`restkit`](https://pypi.python.org/pypi/restkit) is a Python REST kit.

Affected versions of this package are vulnerable to Man-in-the-Middle (MitM) attacks due to not properly validate SSL/TLS certificates. It uses the `ssl.wrap_socket` function from the standard library, which does not do any validation by default.

## References
- [Bugzilla redhat](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2015-2674)
- [GitHub Issue](https://github.com/benoitc/restkit/issues/140)
