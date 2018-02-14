[`Microsoft.AspNet.Mvc.Core`](https://www.nuget.org/packages/Microsoft.AspNet.Mvc.Core) is the core runtime components of ASP.NET MVC.

Affected versions of this package are vulnerable to Open Redirect, which can lead to Privilege Escalation.

ASP.NET Core 2.0 allows an attacker to steal log-in session information such as cookies or authentication tokens via a specially crafted URL aka "ASP.NET Core Elevation Of Privilege Vulnerability".


## Remediation
Upgrade `Microsoft.AspNet.Mvc.Core` to versions 2.0.1 or higher.

## References
- [Microsoft Security Advisory](https://github.com/aspnet/Announcements/issues/277)
- [GitHub Issue](https://github.com/aspnet/Mvc/issues/7053)
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-11879)
