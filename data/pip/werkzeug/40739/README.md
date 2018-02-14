## Overview
Affected versions of [`werkzeug`](https://pypi.python.org/pypi/werkzeug) are vulnerable to HTTP Response Splitting.
It allows newline characters in values in the header. An attacker can leverage this to inject arbitrary headers and conduct HTTP response splitting attacks.

## Remediation
Upgrade `werkzeug` to version 0.8 or higher.

## References
- [GitHub Changelog](https://github.com/pallets/werkzeug/blob/master/CHANGES#L722)
- [Github Commit](https://github.com/pallets/werkzeug/commit/694aae3ec2b73292ffe6ab960807bc8cf8474b81)
