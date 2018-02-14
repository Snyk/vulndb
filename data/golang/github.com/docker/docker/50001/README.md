## Overview
Affected version of [`github.com/docker/docker`](https://github.com/docker/docker) are vulnerable to Privilege Escalation.
Docker 1.0.0 uses world-readable and world-writable permissions on the management socket, which allows local users to gain privileges via unspecified vectors.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-3499)
- [GitHub Commit](https://github.com/docker/docker/commit/707ef9618b3b26a0534a0af732a22f159eccfaa5)
- [Redhad Security Advisory](http://rhn.redhat.com/errata/RHSA-2014-0820.html)
