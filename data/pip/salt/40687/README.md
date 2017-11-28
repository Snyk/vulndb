## Overview
[`salt`](http://pypi.python.org/pypi/salt) is a portable, distributed, remote execution and configuration management system.

Affected versions of the package are vulnerable to Denial of Service (DoS).
SaltStack Salt before 2016.3.8, 2016.11.x before 2016.11.8, and 2017.7.x before 2017.7.2 allows remote attackers to cause a denial of service via a crafted authentication request.

## Remediation
Upgrade `salt` to version 2017.7.2 or higher.

## References
- [Saltstack Security Note #1](https://docs.saltstack.com/en/latest/topics/releases/2016.11.8.html)
- [Saltstack Security Note #2](https://docs.saltstack.com/en/latest/topics/releases/2016.3.8.html)
- [Saltstack Security Note #3](https://docs.saltstack.com/en/latest/topics/releases/2017.7.2.html)
- [Github Commit #1](https://github.com/saltstack/salt/commit/5f8b5e1a0f23fe0f2be5b3c3e04199b57a53db5b)
- [Github Commit #2](https://github.com/saltstack/salt/commit/862f6b8eb8a8172d5b1d43c97136ded52b97b957)
- [Github Commit #3](https://github.com/saltstack/salt/commit/0425defe84d98545c9ab3ead0300bbfd029f8a97)
