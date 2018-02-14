[`System.Net.WebSockets.Client`](https://www.nuget.org/packages/System.Net.WebSockets.Client) provides the System.Net.WebSockets.ClientWebSocket class, which implements the client role of the WebSockets protocol (RFC 6455).

Affected versions of this package are vulnerable to Authentication Bypass attacks. The ASP.NET Core fails to properly sanitize the _Web Request Handler_ component, allowing an attacker to spoof web requests and bypass authentication.

## Remediation
Upgrade `System.Net.WebSockets.Client` to version 4.0.1, 4.3.1 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/2017-0256)
- [Microsoft Security Advisory](https://technet.microsoft.com/en-us/library/security/4021279.aspx)
- [GitHub Security Advisory](https://github.com/aspnet/Announcements/issues/239)
