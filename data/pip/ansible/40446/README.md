## Overview
[`ansible`](https://pypi.python.org/pypi/ansible) is a Radically simple IT automation
Affected versions of this package are vulnerable to Arbitrary Command Execution. If an attacker has control over an Ansible client, they could send facts back to the Ansible Server and exploit this to run code on the server.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-9587)
- [Ansible Security](https://www.ansible.com/security)
- [Redhat Security Advisory](https://access.redhat.com/security/cve/cve-2016-9587)
