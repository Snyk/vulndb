## Overview
[`org.apache.sling:org.apache.sling.xss`](https://sling.apache.org) is .

Affected versions of this package are vulnerable to Cross-Site Scripting (XSS) attacks.
In the XSS Protection API module before 1.0.12 in Apache Sling, the encoding done by the `XSSAPI.encodeForJSString()` method is not restrictive enough and for some input patterns allows script tags to pass through unencoded, leading to potential XSS vulnerabilities.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/xss-attacks-the-next-wave/).

## Remediation
Upgrade `org.apache.sling:org.apache.sling.xss` to version 1.0.12 or higher.

## References
- [Openwall](http://www.openwall.com/lists/oss-security/2017/07/18/3)
