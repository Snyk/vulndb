## Overview
[`ox`](https://rubygems.org/gems/ox) is a fast XML parser and object serializer that uses only standard C lib.

Affected versions of the package are vulnerable to Denial of Service (DoS).
In the Ox gem 2.8.0 for Ruby, the process crashes with a segmentation fault when a crafted input is supplied to parse_obj. NOTE: the vendor has stated "Ox should handle the error more gracefully" but has not confirmed a security implication.

## Remediation
Upgrade `ox` to version 2.8.1 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-15928)
- [Github Issue](https://github.com/ohler55/ox/issues/194)
- [Github Commit](https://github.com/ohler55/ox/commit/e4565dbc167f0d38c3f93243d7a4fcfc391cbfc8)
