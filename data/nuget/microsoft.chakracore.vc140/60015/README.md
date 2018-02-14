[`Microsoft.ChakraCore.vc140`](https://www.nuget.org/packages/Microsoft.ChakraCore.vc140) is the core part of the Chakra Javascript engine that powers Microsoft Edge.

Affected versions of this package are vulnerable to Denial of Service (DoS)

The Microsoft (1) Chakra JavaScript, (2) JScript, and (3) VBScript engines, as used in Microsoft Internet Explorer 10 and 11 and Microsoft Edge, allow remote attackers to execute arbitrary code or cause a denial of service (memory corruption) via a crafted web site, aka "Scripting Engine Memory Corruption Vulnerability."

## Remediation
Upgrade `Microsoft.ChakraCore.vc140` to version 1.2.3 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/2016-3202)
- [Microsoft Security Advisory](http://technet.microsoft.com/security/bulletin/MS16-063)
- [Microsoft Security Advisory](http://technet.microsoft.com/security/bulletin/MS16-068)
