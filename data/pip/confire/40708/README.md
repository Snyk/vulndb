## Overview
[`confire`](http://pypi.python.org/pypi/confire) is a simple app configuration scheme using YAML and class based defaults.

Affected versions of the package are vulnerable to Arbitrary Code Execution.
An exploitable vulnerability exists in the YAML parsing functionality in config.py in Confire 0.2.0. Due to the user-specific configuration being loaded from "/.confire.yaml" using the yaml.load function, a YAML parser can execute arbitrary Python commands resulting in command execution. An attacker can insert Python into loaded YAML to trigger this vulnerability.

## Remediation
The fix is merged to the master branch but not yet published.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-16763)
- [GitHub Issue](https://github.com/bbengfort/confire/issues/24)
- [GitHub Commit](https://github.com/bbengfort/confire/commit/8cc86a5ec2327e070f1d576d61bbaadf861597ea)
