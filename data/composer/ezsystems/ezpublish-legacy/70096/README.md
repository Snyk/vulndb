# Overview
Affected versions of [`ezsystems/ezpublish-legacy`](https://packagist.org/packages/ezsystems/ezpublish-legacy) are vulnerable to Information Exposure in the backend content tree menu.
If a view has been disabled in `site.ini` Rules, and an attacker accesses the backend with the URL to this module, then the tree menu may be displayed. Since the tree menu may contain hidden items, this may lead to information disclosure

## Remediation
Upgrade `ezsystems/ezpublish-legacy` to version 2017.8.1.1, 5.4.10.1, 5.3.12.2 or higher.

## References
- [Security Advisory](http://share.ez.no/community-project/security-advisories/ezsa-2017-006-information-disclosure-in-backend-content-tree-menu)
- [GitHub Commit](https://github.com/ezsystems/ezpublish-legacy/commit/a4a0470f8d80f012fe14e4f8ab11c7d14375986c)
