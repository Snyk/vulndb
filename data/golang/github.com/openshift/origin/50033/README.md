## Overview
Affected version of [`github.com/openshift/origin`](https://github.com/openshift/origin) are vulnerable to Denial Of Service (DoS) attacks.
The API server in OpenShift Origin 1.0.5 allows remote attackers to cause a denial of service (master process crash) via crafted JSON data.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-5250)
- [GitHub Commit](https://github.com/openshift/origin/commit/dace5075e31b74703e944b6b3ebe8836be8d1b9a)
- [Redhat Security Advisory](https://access.redhat.com/errata/RHSA-2015:1736)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1259867)
- [GitHub Issue](https://github.com/openshift/origin/issues/4374)
