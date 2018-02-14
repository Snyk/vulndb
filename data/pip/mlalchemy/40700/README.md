## Overview
[`mlalchemy`](http://pypi.python.org/pypi/mlalchemy) is a library for converting YAML/JSON to SQLAlchemy SELECT queries.

Affected versions of the package are vulnerable to Arbitrary Code Execution.
An exploitable vulnerability exists in the YAML parsing functionality in the parse_yaml_query method in parser.py in MLAlchemy before 0.2.2. When processing YAML-Based queries for data, a YAML parser can execute arbitrary Python commands resulting in command execution because load is used where safe_load should have been used. An attacker can insert Python into loaded YAML to trigger this vulnerability.

## Remediation
Upgrade `mlalchemy` to version 0.2.2 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-16615)
- [GitHub Issue](https://github.com/thanethomson/MLAlchemy/issues/1)
- [GitHub Commit](https://github.com/thanethomson/MLAlchemy/commit/bc795757febdcce430d89f9d08f75c32d6989d3c)
