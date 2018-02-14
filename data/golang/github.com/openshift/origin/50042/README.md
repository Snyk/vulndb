## Overview
Affected version of [`github.com/openshift/origin`](https://github.com/openshift/origin) are vulnerable to Information Exposure.
openshift-node in OpenShift Origin 1.1.6 and earlier improperly stores router credentials as envvars in the pod when the --credentials option is used, which allows local users to obtain sensitive private key information by reading the systemd journal.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-8945)
- [GitHub Commit](https://github.com/openshift/origin/commit/f762dc6f052a36b0dc2b72e23aa7895aac6a84f1)
- [Openwall](http://www.openwall.com/lists/oss-security/2016/07/13/10)
- [GitHub PR](https://github.com/openshift/origin/issues/3951)
