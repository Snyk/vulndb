[`System.Net.Security`](https://www.nuget.org/packages/System.Net.Security) provides types, such as System.Net.Security.SslStream, that uses SSL/TLS protocols to provide secure network communication between client and server endpoints.

Affected versions of this package are vulnerable to Denial of Service (DoS) attacks.

A denial of service vulnerability exists when the `ASP.NET Core` fails to properly validate web requests.

**NOTE:** Microsoft has not commented on third-party claims that the issue is that the `TextEncoder.EncodeCore` function in the `System.Text.Encodings.Web` package in ASP.NET Core Mvc before 1.0.4 and 1.1.x before 1.1.3 allows remote attackers to cause a denial of service by leveraging failure to properly calculate the length of 4-byte characters in the Unicode Non-Character range.

## Remediation
Upgrade `System.Net.Security` to version 4.0.1, 4.3.1 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/2017-0247)
- [David Fernandez Blog](https://www.sidertia.com/Home/Community/Blog/2017/05/18/ASPNET-Core-Unicode-Non-Char-Encoding-DoS)
- [Microsoft Security Advisory](https://technet.microsoft.com/en-us/library/security/4021279.aspx)
- [GitHub Security Advisory](https://github.com/aspnet/Announcements/issues/239)
