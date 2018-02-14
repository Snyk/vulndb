## Overview
Affected version of [`github.com/docker/docker`](https://github.com/docker/docker) are vulnerable to Directory Traversal attacks when processing of absolute symlinks. Only relative links were considered while checking symlinks for traversals. An attacker could exploit this archive extraction or through volume mounts.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-9356)
- [Docker Security](https://groups.google.com/forum/#%21msg/docker-user/nFAz-B-n4Bw/0wr3wvLsnUwJ)
- [Redhat Security Advisory](https://access.redhat.com/security/cve/cve-2014-9356)
