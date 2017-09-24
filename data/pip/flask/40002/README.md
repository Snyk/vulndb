## Overview
Affected versions of [`flask`](https://pypi.python.org/pypi/Flask) are vulnerable to Arbitrary File Download. A client can use backslashes to escape the directory the files where exposed from.
**Note:** Only if the host server is a windows based operating system.

## References
- [GitHub Changelog](https://github.com/pallets/flask/blob/master/CHANGES)
- [GitHub Commit](https://github.com/pallets/flask/commit/aeed530e3221c1b445c13269dcd2fb67548bcefc)
