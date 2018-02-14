## Overview
[`next`](https://www.npmjs.com/package/next) is a minimalistic framework for server-rendered React applications.

Affected versions of the package are vulnerable to Cross-site Scripting (XSS) attacks. User supplied input is used in a `<script src=>`, and is not sanitized. An attacker may exploit this and inject arbitrary code into the template.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/xss-attacks-the-next-wave).

## Remediation
Upgrade `next` to version 2.4.3 or higher.

## References
- [Release Notes](https://github.com/zeit/next.js/releases/tag/2.4.3)
- [Ru_Raz0r Tweet](https://twitter.com/ru_raz0r/status/872800558045954048)
