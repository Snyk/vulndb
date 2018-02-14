## Overview
[`pyanyapi`](http://pypi.python.org/pypi/pyanyapi) is tools for convenient interface creation over various types of data in a declarative way.

Affected versions of the package are vulnerable to Arbitrary Code Execution.
An exploitable vulnerability exists in the YAML parsing functionality in the YAMLParser method in Interfaces.py in PyAnyAPI before 0.6.1. A YAML parser can execute arbitrary Python commands resulting in command execution because load is used where safe_load should have been used. An attacker can insert Python into loaded YAML to trigger this vulnerability.

## Remediation
Upgrade `pyanyapi` to version 0.6.1 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-16616)
- [GitHub Issue](https://github.com/Stranger6667/pyanyapi/issues/41)
- [GitHub Commit](https://github.com/Stranger6667/pyanyapi/commit/810db626c18ebc261d5f4299d0f0eac38d5eb3cf)
