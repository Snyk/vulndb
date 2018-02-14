[`Microsoft.AspNetCore.Mvc.ViewFeatures`](https://www.nuget.org/packages/Microsoft.AspNetCore.Mvc.ViewFeatures) contains common types used in most MVC applications as well as view rendering features such as view engines, views, view components, and HTML helpers.

Affected versions of this package are vulnerable to Privilege Escalation. `View Components` could receive incorrect information, including the details of the current authenticated user. If a `View Component` depends on the vulnerable code and makes decisions based on the current user, then the it could make incorrect decisions that result in elevation of privilege.

## Remediation
Upgrade `Microsoft.AspNetCore.Mvc.ViewFeatures` to version 1.0.1 or higher.

## References
- [Microsoft Security Advisory](https://technet.microsoft.com/library/security/3181759)
