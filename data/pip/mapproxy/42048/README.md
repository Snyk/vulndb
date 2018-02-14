## Overview
[MapProxy](https://pypi.python.org/pypi/MapProxy/1.11.0) is an open source proxy for geospatial data.

Affected versions of this package are vulnerable to Cross Site Scripting (XSS) attack in the demo service resulting in possible information disclosure.

## Remediation
Upgrade `MapProxy` to version 1.10.4 or higher.

## References
- [GitHub Issue](https://github.com/mapproxy/mapproxy/issues/322)
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-1000426)
