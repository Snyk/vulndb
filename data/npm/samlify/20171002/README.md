## Overview
[`samlify`](https://www.npmjs.com/package/samlify) is a Node.js API for Single Sign On (SAML 2.0).

Affected versions of this package are vulnerable to XML Injection attack.

An XML Signature Wrapping vulnerability exists in Samlify 2.2.0 and earlier, and in predecessor Express-saml2 which could allow attackers to impersonate arbitrary users.

## Remediation
Upgrade to `shiba` version 2.3.0 or higher.

## References
- [Release Notes](https://github.com/tngan/samlify/releases/tag/v2.3.0)
- [WhiteHats Security Blog](https://www.whitehats.nl/blog/xml-signature-wrapping-samlify)
