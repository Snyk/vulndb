## Overview
Affected versions of [`contao/listing-bundle`](https://packagist.org/packages/contao/listing-bundle) are vulnerable to SQL Injection

Both the search filter in the back end and the "listing" module in the front end are vulnerable. To exploit the vulnerability in the back end, a back end user has to be logged in, whereas the front end vulnerability can be exploited by anyone.

## Remediation
Upgrade `contao/listing-bundle` to version 3.5.30, 4.4.8 or higher.

## References
- [Contao Release Notes](https://contao.org/en/news/contao-4_4_8.html)
