## Overview
Affected version of [`github.com/openshift/origin`](https://github.com/openshift/origin) are vulnerable to Information Exposure.
HAproxy in Red Hat OpenShift Enterprise 3.2 and OpenShift Origin allows local users to obtain the internal IP address of a pod by reading the `OPENSHIFT_[namespace]_SERVERID` cookie.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-3711)
- [GitHub Commit](https://github.com/openshift/origin/commit/2d4cec7abefee8af1bfefa886541b370618d817c)
- [Redhat Security Advisory](https://access.redhat.com/errata/RHSA-2016:1064)
- [GitHub PR](https://github.com/openshift/origin/pull/8334)
