## Overview
['waterline-sequel'](https://www.npmjs.com/package/waterline-sequel) is a helper library for generating SQL queries from the Waterline Query Language.

`waterline-sequel` version `0.5.0` is vulnerable to SQL Injection via `like`, `contains`, `startsWith` or `endsWith` methods.

## Remediation
Upgrade `waterline-sequel` to version `0.5.1` or greater

## References
- https://github.com/balderdashy/waterline/issues/1219#issuecomment-157294530
- https://www.owasp.org/index.php/SQL_Injection

