## Overview
[`pastescript`](https://pypi.python.org/pypi/pastescript) is a A pluggable command-line frontend, including commands to setup package file layouts
Paste Script 1.7.5 and earlier does not properly set group memberships during execution with root privileges, which might allow remote attackers to bypass intended file-access restrictions by leveraging a web application that uses the local filesystem.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-0878)
- [Bugzilla redhat](https://bugzilla.redhat.com/show_bug.cgi?id=796790)
- [Bitbucket PR](https://bitbucket.org/ianb/pastescript/pull-request/3/fix-group-permissions-for-pastescriptserve)
- [Bitbucket Commit](https://bitbucket.org/ianb/pastescript/commits/a19e462769b4)
