## Overview
[`bepasty`](https://pypi.python.org/pypi/bepasty) is a binary pastebin / file upload service
Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks via the `download.py` file, due to it rendering the content as html rather text. An attacker user could craft a file that would run on the server and execute arbitrary code.

## References
- [GitHub Commit](https://github.com/bepasty/bepasty-server/commit/068fc4e1906bda3cd94705ba2907e52864f10ee3)
- [GitHub Changelog](https://github.com/bepasty/bepasty-server/blob/master/CHANGES.rst#release-030)
