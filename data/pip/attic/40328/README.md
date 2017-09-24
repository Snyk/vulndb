## Overview
[`attic`](https://pypi.python.org/pypi/attic) is a Deduplicated backups.

Affected versions of this package are vulnerable to decryption attacks. It is possible for the client to determine whether to encrypt the sent data, via a query to the server. An attacker may disable the encryption by deleting the storage on the server and specifying encryption to be off. On the next automated backup, the client will send data unencrypted to the server, including passwords and passphrases.

## Remediation
Upgrade `attic` to version 0.15 or higher.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-4082)
- [GitHub Issue](https://github.com/jborg/attic/issues/271)
- [GitHub Commit](https://github.com/jborg/attic/commit/78f9ad1faba7193ca7f0acccbc13b1ff6ebf9072)
- [OSS Security](http://seclists.org/oss-sec/2015/q2/592)
