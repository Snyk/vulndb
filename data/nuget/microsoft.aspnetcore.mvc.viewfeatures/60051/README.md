[`Microsoft.AspNetCore.Mvc.ViewFeatures`](https://www.nuget.org/packages/Microsoft.AspNetCore.Mvc.ViewFeatures) contains common types used in most MVC applications as well as view rendering features such as view engines, views, view components, and HTML helpers.

Affected versions of this package are vulnerable to Privilege Escalation due to failing to properly sanitize web requests,

## Remediation
Upgrade `Microsoft.AspNetCore.Mvc.ViewFeatures` to version 1.0.4, 1.1.3 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/2017-0249)
- [Microsoft Security Advisory](https://technet.microsoft.com/en-us/library/security/4021279.aspx)
- [GitHub Security Advisory](https://github.com/aspnet/Announcements/issues/239)
