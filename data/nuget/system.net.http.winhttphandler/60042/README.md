[`System.Net.Http.WinHttpHandler`](https://www.nuget.org/packages/System.Net.Http.WinHttpHandler) provides a message handler for HttpClient based on the WinHTTP interface of Windows. While similar to HttpClientHandler, it provides developers more granular control over the application's HTTP communication than the HttpClientHandler.

Affected versions of this package are vulnerable due to Improper Certificate Validation. It allows an attacker to bypass _Enhanced Security Usage_ tagging when they present a certificate that is invalid for a specific use.

## Remediation
Upgrade `System.Net.Http.WinHttpHandler` to version 4.0.2, 4.3.1 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/2017-0248)
- [Microsoft Security Advisory](https://technet.microsoft.com/en-us/library/security/4021279.aspx)
- [GitHub Security Advisory](https://github.com/aspnet/Announcements/issues/239)
