## Overview
Affected version of [`github.com/docker/docker`](https://github.com/docker/docker) are vulnerable to Arbitrary Code Execution.
Docker before 1.3.2 allows remote attackers to write to arbitrary files and execute arbitrary code via a (1) symlink or (2) hard link attack in an image archive in a (a) pull or (b) load operation.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-6407)
- [GitHub Commit](https://github.com/docker/docker/commit/3ac6394b8082d4700483d52fbfe54914be537d9e)
- [Openwall](http://www.openwall.com/lists/oss-security/2014/11/24/5)
