## Overview
[`ansible`](https://pypi.python.org/pypi/ansible) is a Radically simple IT automation
Affected versions of this package are vulnerable to Arbitrary command Injection due to failing to properly sanitize fact variables sent from the Ansible controller.  Any user with the ability to create special variables on the controller could exploit this vulnerability, running with the user Ansible runs as.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-8628)
- [Ansible Security](https://www.ansible.com/security)
- [Redhat Security Advisory](https://access.redhat.com/security/cve/cve-2016-8628)
