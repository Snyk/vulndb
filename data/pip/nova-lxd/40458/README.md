## Overview
[`nova_lxd`](https://pypi.python.org/pypi/nova_lxd) is a native lxd driver for openstack
OpenStack Nova-LXD before 13.1.1 uses the wrong name for the veth pairs when applying Neutron security group rules for instances, which allows remote attackers to bypass intended security restrictions.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-5936)
- [Launchpad](https://bugs.launchpad.net/nova-lxd/+bug/1656847)
- [GitHub Commit](https://github.com/openstack/nova-lxd/commit/1b76cefb92081efa1e88cd8f330253f857028bd2)
