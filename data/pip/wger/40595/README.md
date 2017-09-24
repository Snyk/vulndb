## Overview
[`wger`](https://pypi.python.org/pypi/wger) is a FLOSS workout, fitness and weight manager/tracker written with Django.

Affected versions of this package are vulnerable to Denial-of-Service (DoS) attacks. There are no limit checks when uploading csv files, and it is possible to upload large files and cause the server to get stuck iterating through the rows.

## References
- [GitHub Issue](https://github.com/wger-project/wger/issues/238)
- [GitHub PR](https://github.com/wger-project/wger/pull/239)
- [GitHub Commit](https://github.com/wger-project/wger/commit/f3c393aafecb7699bb4686bf7b4bec63af67f3a2)
