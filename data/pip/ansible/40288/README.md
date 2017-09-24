## Overview
[`ansible`](https://pypi.python.org/pypi/ansible) is a Radically simple IT automation
Affected versions of this package are  vulnerable to Arbitrary Code Execution attacks via the `safe_eval()` function in the `__init__.py` file.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-4657)
- [GitHub Commit](https://github.com/ansible/ansible/commit/998793fd0ab55705d57527a38cee5e83f535974c)
- [Ansible Security](https://www.ansible.com/security)
