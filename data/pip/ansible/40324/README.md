## Overview
[`ansible`](https://pypi.python.org/pypi/ansible) is a Radically simple IT automation
Ansible before 1.9.2 does not verify that the server hostname matches a domain name in the subject's Common Name (CN) or subjectAltName field of the X.509 certificate, which allows man-in-the-middle attackers to spoof SSL servers via an arbitrary valid certificate.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-3908)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2015-3908)
- [Ansible Security](https://www.ansible.com/security)
