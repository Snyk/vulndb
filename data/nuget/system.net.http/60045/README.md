[`System.Net.Http`](https://www.nuget.org/packages/System.Net.Http) provides a programming interface for modern HTTP applications, including HTTP client components that allow applications to consume web services over HTTP and HTTP components that can be used by both clients and servers for parsing HTTP headers.

Affected versions of this package are vulnerable to Denial of Service (DoS) attacks.

A denial of service vulnerability exists when the `ASP.NET Core` fails to properly validate web requests.

**NOTE:** Microsoft has not commented on third-party claims that the issue is that the `TextEncoder.EncodeCore` function in the `System.Text.Encodings.Web` package in ASP.NET Core Mvc before 1.0.4 and 1.1.x before 1.1.3 allows remote attackers to cause a denial of service by leveraging failure to properly calculate the length of 4-byte characters in the Unicode Non-Character range.

## Remediation
Upgrade `System.Net.Http` to version 4.1.2, 4.3.2 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/2017-0247)
- [David Fernandez Blog](https://www.sidertia.com/Home/Community/Blog/2017/05/18/ASPNET-Core-Unicode-Non-Char-Encoding-DoS)
- [Microsoft Security Advisory](https://technet.microsoft.com/en-us/library/security/4021279.aspx)
- [GitHub Security Advisory](https://github.com/aspnet/Announcements/issues/239)
