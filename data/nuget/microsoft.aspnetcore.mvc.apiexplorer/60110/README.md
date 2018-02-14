[`Microsoft.AspNetCore.Mvc.ApiExplorer`](https://www.nuget.org/packages/Microsoft.AspNetCore.Mvc.ApiExplorer) is the explorer functionality for discovering metadata such as the list of controllers and actions, and their URLs and allowed HTTP methods.

Affected versions of this package are vulnerable due to Improper Certificate Validation. It allows an attacker to bypass _Enhanced Security Usage_ tagging when they present a certificate that is invalid for a specific use.

## Remediation
Upgrade `Microsoft.AspNetCore.Mvc.ApiExplorer` to version 1.0.4, 1.1.3 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/2017-0248)
- [Microsoft Security Advisory](https://technet.microsoft.com/en-us/library/security/4021279.aspx)
- [GitHub Security Advisory](https://github.com/aspnet/Announcements/issues/239)
