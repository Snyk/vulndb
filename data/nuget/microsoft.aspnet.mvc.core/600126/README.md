[`Microsoft.AspNet.Mvc.Core`](https://www.nuget.org/packages/Microsoft.AspNet.Mvc.Core) is the core runtime components of ASP.NET MVC.

Affected versions of this package are vulnerable to CORS Bypass, which can lead to Information Exposure.

ASP.NET Core 1.0, 1.1, and 2.0 allow an attacker to bypass Cross-origin Resource Sharing (CORS) configurations and retrieve normally restricted content from a web application, aka "ASP.NET Core Information Disclosure Vulnerability".

## Remediation
Upgrade `Microsoft.AspNet.Mvc.Core` to versions 1.0.6, 1.1.5 or higher.

## References
- [Microsoft Security Advisory](https://github.com/aspnet/Announcements/issues/279)
- [GitHub Issue](https://github.com/aspnet/Mvc/issues/7054)
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-11879)
