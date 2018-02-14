[`Microsoft.AspNetCore.Mvc.Core`](https://www.nuget.org/packages/Microsoft.AspNetCore.Mvc.Core) contains common action result types, attribute routing, application model conventions, API explorer, application parts, filters, formatters, model binding, and more.

Affected versions of this package are vulnerable to Authentication Bypass attacks. The ASP.NET Core fails to properly sanitize the _Web Request Handler_ component, allowing an attacker to spoof web requests and bypass authentication.

## Remediation
Upgrade `Microsoft.AspNetCore.Mvc.Core` to version 1.0.4, 1.1.3 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/2017-0256)
- [Microsoft Security Advisory](https://technet.microsoft.com/en-us/library/security/4021279.aspx)
- [GitHub Security Advisory](https://github.com/aspnet/Announcements/issues/239)
