## Overview
[`express-saml2`](https://www.npmjs.com/package/express-saml2) is a High-level API for Single Sign On (SAML 2.0).

Affected versions of this package are vulnerable to XML Injection attack.

An XML Signature Wrapping vulnerability exists in Samlify 2.2.0 and earlier, and in predecessor Express-saml2 which could allow attackers to impersonate arbitrary users.

## Remediation
There is no fix version for `express-saml2`.

## References
- [Release Notes](https://github.com/tngan/samlify/releases/tag/v2.3.0)
- [WhiteHats Security Blog](https://www.whitehats.nl/blog/xml-signature-wrapping-samlify)
