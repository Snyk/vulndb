[`System.Net.WebSockets.Client`](https://www.nuget.org/packages/System.Net.WebSockets.Client) provides the System.Net.WebSockets.ClientWebSocket class, which implements the client role of the WebSockets protocol (RFC 6455).

Affected versions of this package are vulnerable due to Improper Certificate Validation. It allows an attacker to bypass _Enhanced Security Usage_ tagging when they present a certificate that is invalid for a specific use.

## Remediation
Upgrade `System.Net.WebSockets.Client` to version 4.0.1, 4.3.1 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/2017-0248)
- [Microsoft Security Advisory](https://technet.microsoft.com/en-us/library/security/4021279.aspx)
- [GitHub Security Advisory](https://github.com/aspnet/Announcements/issues/239)
