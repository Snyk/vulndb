## Overview
[`keystone`](https://www.npmjs.com/package/keystone) is an web Application Framework and Admin GUI / Content Management System built on Express.js and Mongoose.

Affected versions of this package are vulnerable to Cross-Site Scripting (XSS) attacks.
Cross-Site Scripting vulnerability in KeystoneJS before 4.0.0-beta.7 allows remote authenticated administrators to inject arbitrary web script or HTML via the "content brief" or "content extended" field, a different vulnerability than [CVE-2017-15878](https://snyk.io/vuln/npm:keystone:20171023).

When using user input to perform tasks on the server, characters like \< \> \" \' must escaped properly. Otherwise, an attacker can manipulate the input to introduce additional attributes, potentially executing code. This may lead to a Cross-Site Scripting (XSS) vulnerability, assuming an attacker can influence the value entered into the template.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `keystone` to version 4.0.0-beta.7 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-15881)
- [Github PR](https://github.com/keystonejs/keystone/pull/4478)
- [Github Issue](https://github.com/keystonejs/keystone/issues/4437)
- [Github Commit](https://github.com/keystonejs/keystone/commit/f08baa4fb4084b7ec9f356d313dcfd6d7d7d0f8b)
