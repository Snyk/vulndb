## Overview
[`pyorient`](https://pypi.python.org/pypi/pyorient) is a Orientdb driver for python that uses the binary protocol.

Affected versions of this package vulnerable to SQL Injection. An attacker could change the `WHERE` clause in a query and cause it to return unexpected results.

## References
- [Github Issue](https://github.com/mogui/pyorient/issues/169)
- [Github PR](https://github.com/mogui/pyorient/pull/172)
- [Github Commit #1](https://github.com/mogui/pyorient/commit/2285eb4cf60348e5acd6312b67bd2619003cbceb)
- [Github Commit #2](https://github.com/mogui/pyorient/commit/b7535bd7c1e92629c79d47dcfb0a009edf884d38)
