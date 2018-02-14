[`System.Text.Encodings.Web`](https://www.nuget.org/packages/System.Text.Encodings.Web) provides types for encoding and escaping strings for use in JavaScript, HyperText Markup Language (HTML), and uniform resource locators (URL).

Affected versions of this package are vulnerable due to Improper Certificate Validation. It allows an attacker to bypass _Enhanced Security Usage_ tagging when they present a certificate that is invalid for a specific use.

## Remediation
Upgrade `System.Text.Encodings.Web` to version 4.0.1, 4.3.1 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/2017-0248)
- [Microsoft Security Advisory](https://technet.microsoft.com/en-us/library/security/4021279.aspx)
- [GitHub Security Advisory](https://github.com/aspnet/Announcements/issues/239)
