## Overview
[`auth0-js`](https://www.npmjs.com/package/auth0-js) is a Client Side Javascript toolkit for Auth0 API.

A cross-origin vulnerability has been discovered in the Auth0 auth0.js library affecting versions < 8.12. This vulnerability allows an attacker to acquire authenticated user's tokens and invoke services on a user's behalf if the target site or application uses a popup callback page with `auth0.popup.callback()`.

## References
- [Auth0 Security Bulletin](https://auth0.com/docs/security/bulletins/cve-2017-17068)
