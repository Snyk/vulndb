## Overview
[`ansible`](https://pypi.python.org/pypi/ansible) is a Radically simple IT automation
Affected versions of this package are vulnerable to a Symlink Attack due to enabling a malicious `zone/chroot/jail` managed by ansible to escape into the managing host.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-6240)
- [Openwall](http://www.openwall.com/lists/oss-security/2015/08/17/10)
- [Ansible Security](https://www.ansible.com/security)
