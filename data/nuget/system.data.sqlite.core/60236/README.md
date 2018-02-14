[`System.Data.Common`](https://www.nuget.org/packages/System.Data.Common) provides the base abstract classes, including System.Data.DbConnection and System.Data.DbCommand, for all data providers.

Affected versions of this package are vulnerable to NULL Pointer Dereference

## Remediation
Upgrade `System.Data.Common` to version 2.0.0 or higher.

## References
- [GitHub Issue](https://github.com/dotnet/corefx/issues/16807)
- [GitHub Commit](https://github.com/dotnet/corefx/commit/44eb1dbb8577537cc225e3ceecde9625d90a9b9b)
