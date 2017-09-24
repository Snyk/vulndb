## Overview
Affected versions of [`pyxtrlock`](https://pypi.python.org/pypi/pyxtrlock) are vulnerable to Access Restriction Bypass.
pyxtrlock before 0.1 uses an incorrect variable name, which allows physically proximate attackers to bypass the lock screen via multiple failed authentication attempts, which trigger a crash.

## Remediation
Upgrade to version `0.1` or greater.

## References
- [Github Issue](https://github.com/leonnnn/pyxtrlock/issues/8)
- [Seclists](http://seclists.org/oss-sec/2013/q4/109)
- [Github Commit](https://github.com/leonnnn/pyxtrlock/commit/297a697ce1543451166a9c85ba1e0dd76fa4ae10)
