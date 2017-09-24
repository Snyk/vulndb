## Overview
[`ansible`](https://pypi.python.org/pypi/ansible) is a Radically simple IT automation
lib/ansible/playbook/__init__.py in Ansible 1.2.x before 1.2.3, when playbook does not run due to an error, allows local users to overwrite arbitrary files via a symlink attack on a retry file with a predictable name in /var/tmp/ansible/.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-4260)
- [Ansible Security](https://www.ansible.com/security)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=998227),
- [Ansible Google Group](https://groups.google.com/forum/#%21topic/ansible-project/UVDYW0HGcNg)
