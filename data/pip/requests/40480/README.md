## Overview
[`requests`](https://pypi.python.org/pypi/requests) is a Python HTTP for Humans.

Affected versions of this package are vulnerable to Denial of Service (DoS) attacks. When sending a digest with an incorrect password, it will retry the request for infinity. An attacker can send many of these requests, causing a denial of service.

## References
- [GitHub Issue](https://github.com/requests/requests/issues/541)
- [GitHub PR](https://github.com/requests/requests/pull/547)
- [GitHub Commit](https://github.com/requests/requests/pull/547/commits/c3e6c41fc164d4348f8ce197bd0075aff05637af)
