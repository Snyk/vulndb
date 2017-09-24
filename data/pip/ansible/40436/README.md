## Overview
[`ansible`](https://pypi.python.org/pypi/ansible) is a Radically simple IT automation
Affected versions of this package are vulnerable to Improper Key Validation due to not verifying key fingerprints in the `apt_key()`, allowing a malicious user may generate a key with a 16 digit id and upload it to the server.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-8614)
- [Ansible Security](https://www.ansible.com/security)
- [Ansible Google Group](https://groups.google.com/forum/#!topic/Ansible-project/Ed2QLYD59Tg)
- [GitHub Issue](https://github.com/ansible/ansible-modules-core/issues/5237)
- [GitHub PR #1](https://github.com/ansible/ansible-modules-core/pull/5353)
- [GitHub PR #2](https://github.com/ansible/ansible-modules-core/pull/5357)
