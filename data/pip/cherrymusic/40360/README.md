## Overview
[`cherrymusic`](https://pypi.python.org/pypi/cherrymusic) is an mp3 server for your browser.

Affected versions of this package are vulnerable to Directory Traversal attacks. This allows remote authenticated users to read arbitrary files via the `value` parameter to `download`.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-8309)
- [GitHub Issue](https://github.com/devsnd/cherrymusic/issues/598)
- [GitHub Commit](https://github.com/devsnd/cherrymusic/commit/62dec34a1ea0741400dd6b6c660d303dcd651e86)
