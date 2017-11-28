## Overview
[`recurly`](https://rubygems.org/gems/recurly) is an API client library for Recurly.

Affected versions of this package are vulnerable to Server-Side Request Forgery (SSRF) attacks.
The Recurly Client Ruby Library before 2.0.13, 2.1.11, 2.2.5, 2.3.10, 2.4.11, 2.5.4, 2.6.3, 2.7.8, 2.8.2, 2.9.2, 2.10.4, 2.11.3 is vulnerable to a Server-Side Request Forgery vulnerability in the `Resource#find` method that could result in compromise of API keys or other critical resources.

## References
- [Recurly Issue Summary](https://dev.recurly.com/page/ruby-updates)
- [GitHub Changelog](https://github.com/recurly/recurly-client-ruby/blob/master/CHANGELOG.md#v2112-2017-11-09)
- [GitHub Commit](https://github.com/recurly/recurly-client-ruby/commit/1bb0284d6e668b8b3d31167790ed6db1f6ccc4be)
- [Hackerone Report](https://hackerone.com/reports/288635)
