## Overview
[`passport-wsfed-saml2`](https://www.npmjs.com/package/passport-wsfed-saml2) is a ws-federation protocol + SAML2 tokens authentication provider for Passport.

Affected versons if thus package are vulnerable to User Impersonation.
A vulnerability has been discovered in the Auth0 passport-wsfed-saml2 library affecting versions < 3.0.5. This vulnerability allows an attacker to impersonate another user and potentially elevate their privileges if the SAML identity provider does not sign the full SAML response (e.g., only signs the assertion within the response).

## Remediation
Upgrade `passport-wsfed-saml2` to version 3.0.5 or higher.

## References
- [Auth0 Security Advisory](https://auth0.com/docs/security/bulletins/cve-2017-16897)
