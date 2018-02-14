## Overview
Affected version of [`github.com/kubernetes/kubernetes`](https://github.com/kubernetes/kubernetes) are vulnerable to Access Restriction Bypass.
The API server in Kubernetes does not properly check admission control, which allows remote authenticated users to access additional resources via a crafted patched object.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-1905)
- [GitHub Commit](https://github.com/kubernetes/kubernetes/commit/9e6912384a5bc714f2a780b870944a8cee264a22)
- [Redhat Security Advisory](https://access.redhat.com/errata/RHSA-2016:0070)
- [GitHub Isue](https://github.com/kubernetes/kubernetes/issues/19479)
