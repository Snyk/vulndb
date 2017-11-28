## Overview
[`recurly`](https://rubygems.org/gems/recurly) is an API client library for Recurly.

Affected versions of this package are vulnerable to Server-Side Request Forgery (SSRF) attacks.
The Recurly Client Python Library before 2.0.5, 2.1.16, 2.2.22, 2.3.1, 2.4.5, 2.5.1, 2.6.2 is vulnerable to a Server-Side Request Forgery vulnerability in the Resource.get method that could result in compromise of API keys or other critical resources.

## References
- [Recurly Issue Summary](https://dev.recurly.com/page/python-updates)
- [GitHub Changelog](https://github.com/recurly/recurly-client-python/blob/master/CHANGELOG#L3)
- [GitHub Commit](https://github.com/recurly/recurly-client-python/commit/049c74699ce93cf126feff06d632ea63fba36742)
- [Hackerone Report](https://hackerone.com/reports/288635)
