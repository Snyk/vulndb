## Overview
[`recurly-api-client`](https://www.nuget.org/packages/recurly-api-client/) is an API Client for Recurly - Subscription billing automation.

Affected versions of this package are vulnerable to Server-Side Request Forgery (SSRF) attacks.
The Recurly Client .NET Library before 1.0.1, 1.1.10, 1.2.8, 1.3.2, 1.4.14, 1.5.3, 1.6.2, 1.7.1, 1.8.1 is vulnerable to a Server-Side Request Forgery vulnerability due to incorrect use of `Uri.EscapeUriString` that could result in compromise of API keys or other critical resources.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-0907)
- [Recurly Issue Summary](https://dev.recurly.com/page/net-updates)
- [Github Commit](https://github.com/recurly/recurly-client-net/commit/9eef460c0084afd5c24d66220c8b7a381cf9a1f1)
- [Hackerone Report](https://hackerone.com/reports/288635)
