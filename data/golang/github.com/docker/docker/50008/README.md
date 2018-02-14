## Overview
Affected version of [`github.com/docker/docker`](https://github.com/docker/docker) are vulnerable to Directory Traversal attacks.  
Docker before 1.3.3 does not properly validate image IDs, which allows remote attackers to conduct path traversal attacks and spoof repositories via a crafted image in a (1) "docker load" operation or (2) "registry communications."

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-9358)
- [Docker Security](https://groups.google.com/forum/#%21msg/docker-user/nFAz-B-n4Bw/0wr3wvLsnUwJ)
- [Redhat Security Advisory](https://access.redhat.com/security/cve/cve-2014-9358)
