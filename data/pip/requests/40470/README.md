## Overview
[`requests`](https://pypi.python.org/pypi/requests) is a Python HTTP for Humans.

Affected versions of this package are vulnerable to HTTPoxy attacks. The Python `CGIHandler` class did not properly protect against the `HTTP_PROXY` variable. A remote attacker could possibly use this flaw to redirect HTTP requests performed by a Python CGI script to an attacker-controlled proxy via a malicious HTTP request.

## References
- [GitHub Issue](https://github.com/requests/requests/issues/3422)
- [HTTPoxy Documentation](https://httpoxy.org/)
