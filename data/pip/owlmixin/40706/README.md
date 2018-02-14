## Overview
[`owlmixin`](http://pypi.python.org/pypi/owlmixin) is tools for convenient interface creation over various types of data in a declarative way.

Affected versions of the package are vulnerable to Arbitrary Code Execution.
An exploitable vulnerability exists in the YAML loading functionality of util.py in OwlMixin before 2.0.0a12. A "Load YAML" string or file (aka load_yaml or load_yamlf) can execute arbitrary Python commands resulting in command execution because load is used where safe_load should have been used. An attacker can insert Python into loaded YAML to trigger this vulnerability.

## Remediation
Upgrade `owlmixin` to version 2.0.0a12 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-16618)
- [GitHub Issue](https://github.com/tadashi-aikawa/owlmixin/issues/12)
- [GitHub Commit](https://github.com/tadashi-aikawa/owlmixin/commit/5d0575303f6df869a515ced4285f24ba721e0d4e)
