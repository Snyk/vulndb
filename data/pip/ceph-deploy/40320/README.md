## Overview
[`ceph-deploy`](https://pypi.python.org/pypi/ceph-deploy) is a Deploy Ceph with minimal infrastructure
ceph-deploy before 1.5.23 uses weak permissions (644) for ceph/ceph.client.admin.keyring, which allows local users to obtain sensitive information by reading the file.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-3010)
- [Openwall](http://www.openwall.com/lists/oss-security/2015/04/09/9)
- [GitHub PR](https://github.com/ceph/ceph-deploy/pull/272)
- [GitHub Commit](https://github.com/ceph/ceph-deploy/commit/eee56770393bf19ed2dd5389226c6190c08dee3f)
