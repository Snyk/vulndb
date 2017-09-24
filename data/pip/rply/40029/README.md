## Overview
[`rply`](https://pypi.python.org/pypi/rply) is a A pure Python Lex/Yacc that works with RPython

Affected versions of this package are vulnerable to Insecure use of temporary file attacks.
The parser cache functionality in parsergenerator.py in RPLY (aka python-rply) before 0.7.1 allows local users to spoof cache data by pre-creating a temporary `rply-*.json` file with a predictable name.

## Remediation
Upgrade to version `0.7.1` or greater.

## References
- [Openwall](http://www.openwall.com/lists/oss-security/2014/01/17/8)
- [GitHub Commit](https://github.com/alex/rply/commit/fc9bbcd25b0b4f09bbd6339f710ad24c129d5d7c)
