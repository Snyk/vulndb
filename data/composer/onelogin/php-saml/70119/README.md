# Overview
Affected versions of [`onelogin/php-saml`](https://packagist.org/packages/onelogin/php-saml) are vulnerable to Access Restriction Bypass. An error during signature verification can be treated as a successful verification.

## Remediation
Upgrade `onelogin/php-saml` to version 2.10.4 or higher.

## References
- [GitHub Commit](https://github.com/onelogin/php-saml/commit/949359f5cad5e1d085c4e5447d9aa8f49a6e82a1)
