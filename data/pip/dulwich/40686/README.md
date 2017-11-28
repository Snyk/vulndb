## Overview
[`dulwich`](http://pypi.python.org/pypi/dulwich) is Python Git Library.

Affected versions of the package are vulnerable to Arbitrary Command Injection.
Dulwich before 0.18.5, when an SSH subprocess is used, allows remote attackers to execute arbitrary commands via an ssh URL with an initial dash character in the hostname, a related issue to CVE-2017-9800, CVE-2017-12836, CVE-2017-12976, CVE-2017-1000116, and CVE-2017-1000117.

## Remediation
Upgrade `dulwich` to version 0.18.5 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-16228)
- [Github Commit](https://github.com/jelmer/dulwich/commit/7116a0cbbda571f7dac863f4b1c00b6e16d6d8d6)
