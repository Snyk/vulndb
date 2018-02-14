## Overview
Affected version of [`github.com/lxc/lxd`](https://github.com/lxc/lxd) are vulnerable to Information Exposure.
LXD before 2.0.2 does not properly set permissions when switching an unprivileged container into privileged mode, which allows local users to access arbitrary world readable paths in the container directory via unspecified vectors.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-1582)
- [GitHub Commit](https://github.com/lxc/lxd/commit/9b7f4b4d190c15b841d0e049da40a31f29fd8ebb)
