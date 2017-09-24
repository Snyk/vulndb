## Overview
[`bson`](https://pypi.python.org/pypi/bson) is a BSON codec for Python.

Affected versions of this package are vulnerable to BSON Corruption. A malicious user can insert a null byte into a cstring when encoding, which can terminate the string early. This can lead to BSON document corruption, and depending on how the application uses `bson`, potentially lead to buffer overflow.

## References
- [GitHub PR](https://github.com/py-bson/bson/pull/34)
- [GitHub Commit](https://github.com/py-bson/bson/commit/430c1a72c2c3669ce46ba28b4a813a2b12d07f31)
