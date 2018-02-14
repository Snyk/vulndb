## Overview
Affected version of [`github.com/lxc/lxd`](https://github.com/lxc/lxd) are vulnerable to Information Exposure.
LXD before 2.0.2 uses world-readable permissions for /var/lib/lxd/zfs.img when setting up a loop based ZFS pool, which allows local users to copy and read data from arbitrary containers via unspecified vectors.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-1581)
- [GitHub Commit](https://github.com/lxc/lxd/commit/6f5b69cd208a97fc40803ac2f23cfd6116a41b1f)
