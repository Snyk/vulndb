## Overview
[`tracauthopenid`](https://pypi.python.org/pypi/TracAuthOpenId) is an OpenID plugin for Trac.

Affected versions of this package are vulnerable to Access Restriction Bypass.
If no email address is returned via AX or SREG, the `email_white_list` config option was ignored.

## References
- [Github Commit](https://github.com/trac-hacks/authopenid-plugin/commit/c7900770250c3bf34035b0d927be7ec020a494df)
