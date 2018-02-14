## Overview
Affected version of [`github.com/kubernetes/kubernetes`](https://github.com/kubernetes/kubernetes) are vulnerable to Privilege Escalation.
Kubernetes version 1.5.0-1.5.4 is vulnerable to a privilege escalation in the PodSecurityPolicy admission plugin resulting in the ability to make use of any existing PodSecurityPolicy object.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-1000056)
- [GitHub Commit](https://github.com/kubernetes/kubernetes/commit/7fef0a4f6a44ea36f166c39fdade5324eff2dd5e)
- [GitHub Issue](https://github.com/kubernetes/kubernetes/issues/43459)
