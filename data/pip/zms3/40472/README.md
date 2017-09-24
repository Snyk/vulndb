## Overview
[`zms3`](https://pypi.python.org/pypi/zms3) is a Simplified Content Modelling.

Affected versions of this package are vulnerable to Cross-site Scripting attacks (XSS) due user input not escaped in the `manage_tabs_message` parameter of the `manage_importexport` and `manage_main` files, allowing an attacker to inject code.

## References
- [Vulnerability Lab Advisory](https://www.vulnerability-lab.com/get_content.php?id=1890)
