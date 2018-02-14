[`System.Net.Http`](https://www.nuget.org/packages/System.Net.Http) provides a programming interface for modern HTTP applications, including HTTP client components that allow applications to consume web services over HTTP and HTTP components that can be used by both clients and servers for parsing HTTP headers.

Affected versions of this package are vulnerable due to Improper Certificate Validation. It allows an attacker to bypass _Enhanced Security Usage_ tagging when they present a certificate that is invalid for a specific use.

## Remediation
Upgrade `System.Net.Http` to version 4.1.2, 4.3.2 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/2017-0248)
- [Microsoft Security Advisory](https://technet.microsoft.com/en-us/library/security/4021279.aspx)
- [GitHub Security Advisory](https://github.com/aspnet/Announcements/issues/239)
