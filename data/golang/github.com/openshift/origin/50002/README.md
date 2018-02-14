## Overview
Affected version of [`github.com/openshift/origin`](https://github.com/openshift/origin) are vulnerable to Arbitrary Command Execution.
Red Hat OpenShift Enterprise 3.2 and OpenShift Origin allow remote authenticated users to execute commands with root privileges by changing the root password in an sti builder image.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-2160)
- [GitHub Commit](https://github.com/openshift/origin/commit/2d0350c84150d88be4d1ac181694366832a55709)
- [Redhat Security Advisory](https://access.redhat.com/errata/RHSA-2016:1064)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1316127)
- [GitHub PR](https://github.com/openshift/origin/pull/7864)
