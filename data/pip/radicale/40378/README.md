## Overview
[`radicale`](https://pypi.python.org/pypi/radicale) is a CalDAV and CardDAV Server
The filesystem storage backend in Radicale before 1.1 on Windows allows remote attackers to read or write to arbitrary files via a crafted path, as demonstrated by /c:/file/ignore.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-1505)
- [Openwall](http://www.openwall.com/lists/oss-security/2016/01/07/7)
- [GitHub PR](https://github.com/Kozea/Radicale/pull/343)
- [GitHub Commit](https://github.com/Unrud/Radicale/commit/b4b3d51f33c7623d312f289252dd7bbb8f58bbe6)
