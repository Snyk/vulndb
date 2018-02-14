## Overview
Affected version of [`github.com/docker/docker`](https://github.com/docker/docker) are vulnerable to Access Restriction Bypass.
Docker 1.3.0 through 1.3.1 allows remote attackers to modify the default run profile of image containers and possibly bypass the container by applying unspecified security options to an image.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-6408)
- [GitHub Commit](https://github.com/docker/docker/commit/c9379eb3fbbc484c056f5a5e49d8d0b755a29c45)
- [Openwall](http://www.openwall.com/lists/oss-security/2014/11/24/5)
