## Overview
`droopy` prior to 3.5.0 lacks cross-domain websocket requests verification. This allows attackers to send malicious requests while inheriting the identity and privileges of the currently logged in user.

## Details
Cross-Site Request Forgery (CSRF) is an attack that forces an end user to execute unwanted actions on a web application in which they're currently authenticated. CSRF attacks specifically target state-changing requests, not theft of data, since the attacker has no way to see the response to the forged request. With a little help of social engineering (such as sending a link via email or chat), an attacker may trick the users of a web application into executing actions of the attacker's choosing. If the victim is a normal user, a successful CSRF attack can force the user to perform state changing requests like transferring funds, changing their email address, and so forth. If the victim is an administrative account, CSRF can compromise the entire web application. [1]

## Remediation
Upgrade to version 3.5.0 or greater.

## References
- [1] https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)
- https://github.com/silverwind/droppy/blob/fc023e8163e3a5830a73f055af308aeda7fb78cc/CHANGELOG.md#version-350---10122015
- https://github.com/silverwind/droppy/commit/62ae2cbc87e0e4b7b61205b3d926e275c8f1accc
