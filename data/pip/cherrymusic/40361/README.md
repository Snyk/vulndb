## Overview
[`cherrymusic`](https://pypi.python.org/pypi/cherrymusic) is an mp3 server for your browser.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks. Cross-site Scripting (XSS) vulnerability in Cherry Music before 0.36.0 allows remote authenticated users to inject arbitrary web script or HTML via the playlistname field when creating a new playlist.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-8309)
- [GitHub Issue](https://github.com/devsnd/cherrymusic/issues/598)
- [GitHub Commit](https://github.com/devsnd/cherrymusic/commit/62dec34a1ea0741400dd6b6c660d303dcd651e86)
