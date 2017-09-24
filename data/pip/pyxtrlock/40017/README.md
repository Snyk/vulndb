## Overview
Affected versions of [`pyxtrlock`](https://pypi.python.org/pypi/pyxtrlock) are vulnerable to Access Restriction Bypass.
pyxtrlock before 0.2 does not properly check the return values of the (1) xcb_grab_pointer and (2) xcb_grab_keyboard XCB library functions, which allows physically proximate attackers to gain access to the keyboard or mouse without unlocking the screen via unspecified vectors.

## Remediation
Upgrade to version `0.2` or greater.

## References
- [Github Commit](https://github.com/leonnnn/pyxtrlock/commit/fd5dafe)
- [Seclists](http://seclists.org/oss-sec/2013/q4/109)
