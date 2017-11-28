## Overview
[`salt`](http://pypi.python.org/pypi/salt) is a portable, distributed, remote execution and configuration management system.

Affected versions of the package are vulnerable to Directory Traversal.
Directory traversal vulnerability in minion id validation in SaltStack Salt before 2016.3.8, 2016.11.x before 2016.11.8, and 2017.7.x before 2017.7.2 allows remote minions with incorrect credentials to authenticate to a master via a crafted minion ID. NOTE: this vulnerability exists because of an incomplete fix for CVE-2017-12791.

## Remediation
Upgrade `salt` to version 2017.7.2 or higher.

## References
- [Saltstack Security Note #1](https://docs.saltstack.com/en/latest/topics/releases/2016.11.8.html)
- [Saltstack Security Note #2](https://docs.saltstack.com/en/latest/topics/releases/2016.3.8.html)
- [Saltstack Security Note #3](https://docs.saltstack.com/en/latest/topics/releases/2017.7.2.html)
- [Github Commit #1](https://github.com/saltstack/salt/commit/80d90307b07b3703428ecbb7c8bb468e28a9ae6d)
- [Github Commit #2](https://github.com/saltstack/salt/commit/31b38f50ebf321a1d14af0868c516a5de865f5a8)
- [Github Commit #3](https://github.com/saltstack/salt/commit/9ba1f6112fa72627b42eed4c4eea439dce2df31c)
