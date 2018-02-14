[`Microsoft.AspNetCore.Mvc.DataAnnotations`](https://www.nuget.org/packages/Microsoft.AspNetCore.Mvc.DataAnnotations) is a package for metadata and validation system using System.ComponentModel.DataAnnotations.

Affected versions of this package are vulnerable to Privilege Escalation due to failing to properly sanitize web requests,

## Remediation
Upgrade `Microsoft.AspNetCore.Mvc.DataAnnotations` to version 1.0.4, 1.1.3 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/2017-0249)
- [Microsoft Security Advisory](https://technet.microsoft.com/en-us/library/security/4021279.aspx)
- [GitHub Security Advisory](https://github.com/aspnet/Announcements/issues/239)
