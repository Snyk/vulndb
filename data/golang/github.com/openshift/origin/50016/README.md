## Overview
Affected version of [`github.com/openshift/origin`](https://github.com/openshift/origin) are vulnerable to Information Exposure.
The API server in Kubernetes, as used in Red Hat OpenShift Enterprise 3.2, in a multi tenant environment allows remote authenticated users with knowledge of other project names to obtain sensitive project and user information via vectors related to the watch-cache list.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-5392)
- [Redhat Security Advisory](https://access.redhat.com/errata/RHSA-2016:1427)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1356195)
