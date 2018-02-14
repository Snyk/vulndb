## Overview
Affected version of [`github.com/projectatomic/oci-register-machine`](https://github.com/projectatomic/oci-register-machine) are vulnerable to Information Exposure.
The machinectl command in oci-register-machine allows local users to list running containers and possibly obtain sensitive information by running that command.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-6349)
- [GitHub Commit](https://github.com/projectatomic/oci-register-machine/commit/40e9650bf1baa92a6f2513a43cd9440e5aba78e2)
- [Openwall](http://www.openwall.com/lists/oss-security/2016/10/13/7)
- [GitHub PR](https://github.com/projectatomic/oci-register-machine/pull/22)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1360634)
