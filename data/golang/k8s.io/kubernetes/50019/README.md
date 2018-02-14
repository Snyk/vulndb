## Overview
Affected version of [`github.com/kubernetes/kubernetes`](https://github.com/kubernetes/kubernetes) are vulnerable to Directory Traversal.
Directory traversal vulnerability in Kubernetes, as used in Red Hat OpenShift Enterprise 3.0, allows attackers to write to arbitrary files via a crafted object type name, which is not properly handled before passing it to etcd.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-5305)
- [GitHub Commit](https://github.com/kubernetes/kubernetes/commit/68f2add9bd5d43b9da1424d87d88f83d120e17d0)
- [Redhat Security Advisory](https://access.redhat.com/errata/RHSA-2015:1945)
