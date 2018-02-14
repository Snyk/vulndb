# Overview
Affected versions of [`cakephp/cakephp`](https://packagist.org/packages/cakephp/cakephp) are vulnerable to Cross-Site Request Forgery (CSRF). The `CsrfComponent` fails to invalidate requests that are missing both the CSRF token, and the CSRF post data.

## Remediation
Upgrade `cakephp/cakephp` to version 3.0.4 or higher.

## References
- [Cakephp Bakery Release Note](http://bakery.cakephp.org/2015/05/07/cakephp_3_0_4_released.html)
- [Github Commit](https://github.com/cakephp/cakephp/commit/522ed2f1fb49b00001c1ef8815a6feda790d61dd)
