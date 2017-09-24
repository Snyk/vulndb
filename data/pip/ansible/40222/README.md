## Overview
[`ansible`](https://pypi.python.org/pypi/ansible) is a Radically simple IT automation
runner/connection_plugins/ssh.py in Ansible before 1.2.3, when using ControlPersist, allows local users to redirect a ssh session via a symlink attack on a socket file with a predictable name in /tmp/.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-4259)
- [Ansible Security](https://www.ansible.com/security)
- [Redhat Bugzila](https://bugzilla.redhat.com/show_bug.cgi?id=998223)
- [Ansible Google Group](https://groups.google.com/forum/#%21topic/ansible-project/UVDYW0HGcNg)
