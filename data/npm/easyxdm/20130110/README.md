## Overview
[`easyxdm`](https://www.npmjs.com/package/easyxdm) is a CommonJS-compatible that can easily be rebuilt with `make`.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) due to lack of validation in `name.html`, allowing remote attackers to inject arbitrary web script or HTML via the `location.hash` value.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `easyxdm` to version 2.4.19 or higher.

## References
- [Seclists](http://seclists.org/fulldisclosure/2014/Feb/5)
- [GitHub Commit](https://github.com/oyvindkinsey/easyXDM/commit/a3194d32c25a0d27a10a47304eb9c9be93ffbf13)
