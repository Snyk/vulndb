# Overview
Affected versions of [`cakephp/cakephp`](https://packagist.org/packages/cakephp/cakephp) are vulnerable to Cross Domain Form Submission. A malicious user could use one secured form to post into
a controller action that the form was not originally intended for.

## Remediation
Upgrade `cakephp/cakephp` to version 1.3.18, 2.4.8 or higher.

## References
- [Cakephp Bakery Release Note](http://bakery.cakephp.org/2014/04/29/CakePHP-1-3-18-and-2-4-8-released.html)
- [Github Commit #1](https://github.com/cakephp/cakephp/commit/db6cfe4)
- [Github Commit #2](https://github.com/cakephp/cakephp/commit/f23d811)
