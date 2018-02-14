# Overview
Affected versions of [`cakephp/cakephp`](https://packagist.org/packages/cakephp/cakephp) are vulnerable to Access Restriction Bypass.

Unconventional URL paths would allow direct access to prefixed actions without setting the correct request parameters. If your authorization depends on the presence of the prefix routing key you should upgrade as soon as possible.

## Remediation
Upgrade `cakephp/cakephp` to version 2.6.11, 2.7.2, 2.5.9 or higher.

## References
- [Cakephp Bakery Release Note](http://bakery.cakephp.org/2015/08/06/cakephp_2_5_9_2_6_10_2_7_2_released.html)
