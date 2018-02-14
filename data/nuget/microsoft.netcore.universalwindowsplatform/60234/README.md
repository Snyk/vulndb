[`Microsoft.NETCore.UniversalWindowsPlatform`](https://www.nuget.org/packages/Microsoft.NETCore.UniversalWindowsPlatform) is the core runtime components of ASP.NET MVC.

Affected versions of this package are vulnerable to Security Feature Bypass when Microsoft .NET Framework (and .NET Core) components do not completely validate certificates.

An attacker could present a certificate that is marked invalid for a specific use, but the component uses it for that purpose. This action disregards the Enhanced Key Usage taggings

## Remediation
Upgrade `Microsoft.AspNet.Mvc.Core` to versions 1.0.6, 1.1.5 or higher.

## References
- [Microsoft Security Advisory](https://github.com/dotnet/announcements/issues/51)
- [.Net Blog](https://blogs.msdn.microsoft.com/dotnet/2018/01/09/net-core-january-2018-update/) 
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2018-0786)
