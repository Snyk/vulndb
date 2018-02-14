[`Microsoft.AspNetCore.Mvc.WebApiCompatShim`](https://www.nuget.org/packages/Microsoft.AspNetCore.Mvc.WebApiCompatShim) provides compatibility in ASP.NET Core MVC with ASP.NET Web API 2 to simplify migration of existing Web API implementations.

Affected versions of this package are vulnerable to Privilege Escalation. `View Components` could receive incorrect information, including the details of the current authenticated user. If a `View Component` depends on the vulnerable code and makes decisions based on the current user, then the it could make incorrect decisions that result in elevation of privilege.

## Remediation
Upgrade `Microsoft.AspNetCore.Mvc.WebApiCompatShim` to version 1.0.1 or higher.

## References
- [Microsoft Security Advisory](https://technet.microsoft.com/library/security/3181759)
