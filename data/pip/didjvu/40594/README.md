## Overview
[`didjvu`](https://pypi.python.org/pypi/didjvu)
Affected versions of this package are vulnerable to Arbitrary File Creation via a race condition. There is a window between the creation


It creates a unique temporary file directly in `/tmp` and passes the temp file's name to `c44` to be used as the output file name. `c44` then deletes the output file and creates a new one under the same name without the `O_EXCL` parameter. This opens a race window, during which a malicious local user could create their own file under this name.

## References
- [GitHub Issue](https://github.com/jwilk/didjvu/issues/8)
- [GitHub Changelog] (https://github.com/jwilk/didjvu/blob/master/doc/changelog)
