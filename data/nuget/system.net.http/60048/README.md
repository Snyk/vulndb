[`System.Net.Http`](https://www.nuget.org/packages/System.Net.Http) provides a programming interface for modern HTTP applications, including HTTP client components that allow applications to consume web services over HTTP and HTTP components that can be used by both clients and servers for parsing HTTP headers.

Affected versions of this package are vulnerable to Authentication Bypass attacks. The ASP.NET Core fails to properly sanitize the _Web Request Handler_ component, allowing an attacker to spoof web requests and bypass authentication.

## Remediation
Upgrade `System.Net.Http` to version 4.1.2, 4.3.2 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/2017-0256)
- [Microsoft Security Advisory](https://technet.microsoft.com/en-us/library/security/4021279.aspx)
- [GitHub Security Advisory](https://github.com/aspnet/Announcements/issues/239)
