[`Microsoft.AspNetCore.Mvc.Cors`](https://www.nuget.org/packages/Microsoft.AspNetCore.Mvc.Cors) is a package for cross-origin resource sharing (CORS) features.

Affected versions of this package are vulnerable to Privilege Escalation. `View Components` could receive incorrect information, including the details of the current authenticated user. If a `View Component` depends on the vulnerable code and makes decisions based on the current user, then the it could make incorrect decisions that result in elevation of privilege.

## Remediation
Upgrade `Microsoft.AspNetCore.Mvc.Cors` to version 1.0.1 or higher.

## References
- [Microsoft Security Advisory](https://technet.microsoft.com/library/security/3181759)
