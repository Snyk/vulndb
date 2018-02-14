[`Microsoft.Net.Http.Server`](https://www.nuget.org/packages/Microsoft.Net.Http.Server) is the core runtime components of ASP.NET MVC.

Affected versions of this package are vulnerable to Denial of Service (DoS) attacks.

.NET Core 1.0, 1.1, and 2.0 allow an unauthenticated attacker to remotely cause a denial of service attack against a .NET Core web application by improperly handling web requests, aka ".NET CORE Denial Of Service Vulnerability".

## Remediation
Upgrade `Microsoft.Net.Http.Server` to versions 1.1.4 or higher.

## References
- [Microsoft Security Advisory](https://github.com/aspnet/Announcements/issues/278)
- [GitHub Issue](https://github.com/aspnet/HttpSysServer/issues/416)
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-11883)
