## Overview
[`org.keycloak:keycloak-server-spi-private`](https://keycloak.org) is an open Source Identity and Access Management for modern Applications and Services.

Affected versions of this package are vulnerable to Cross-Site Scripting (XSS) attacks.
It was found that Keycloak would accept a HOST header URL in the admin console and use it to determine web resource locations. An attacker could use this flaw against an authenticated user to attain reflected XSS via a malicious server.

## Details
When using user input to perform tasks on the server, characters like \< \> \" \' must escaped properly. Otherwise, an attacker can manipulate the input to introduce additional attributes, potentially executing code. This may lead to a Cross-Site Scripting (XSS) vulnerability, assuming an attacker can influence the value entered into the template.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `org.keycloak:keycloak-server-spi-private` to version 3.1.0.CR1 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-12158)
- [Github PR](https://github.com/keycloak/keycloak/pull/4031)
- [Github Commit](https://github.com/keycloak/keycloak/commit/cf7f28d97e5937245fa14eabe4c477740a9d0e91)
