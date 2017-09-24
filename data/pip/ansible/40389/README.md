## Overview
[`ansible`](https://pypi.python.org/pypi/ansible) is a Radically simple IT automation
The create_script function in the lxc_container module in Ansible before 1.9.6-1 and 2.x before 2.0.2.0 allows local users to write to arbitrary files or gain privileges via a symlink attack on (1) /opt/.lxc-attach-script, (2) the archived container in the archive_path directory, or the (3) lxc-attach-script.log or (4) lxc-attach-script.err files in the temporary directory.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-3096)
- [Ansible Security](https://www.ansible.com/security)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1322925,)
- [GitHub PR](https://github.com/ansible/ansible-modules-extras/pull/1941)
- [GitHub Commit](https://github.com/ansible/ansible-modules-extras/pull/1941/commits/8c6fe646ee79f5e55361b885b7efed5bec72d4a4)
- [GitHub Changelog](https://github.com/ansible/ansible/blob/v1.9.6-1/CHANGELOG.md#196-dancing-in-the-street---tbd)
- [GitHub Changelog](https://github.com/ansible/ansible/blob/v2.0.2.0-1/CHANGELOG.md#202-over-the-hills-and-far-away)
- [Ansible Google Group](https://groups.google.com/forum/#%21topic/ansible-announce/E80HLZilTU0)
- [Ansible Google Group](https://groups.google.com/forum/#%21topic/ansible-announce/tqiZbcWxYig)
