[`System.Net.Security`](https://www.nuget.org/packages/System.Net.Security) provides types, such as System.Net.Security.SslStream, that uses SSL/TLS protocols to provide secure network communication between client and server endpoints.

Affected versions of this package are vulnerable to Privilege Escalation due to failing to properly sanitize web requests,

## Remediation
Upgrade `System.Net.Security` to version 4.0.1, 4.3.1 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/2017-0249)
- [Microsoft Security Advisory](https://technet.microsoft.com/en-us/library/security/4021279.aspx)
- [GitHub Security Advisory](https://github.com/aspnet/Announcements/issues/239)
