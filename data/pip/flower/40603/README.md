## Overview
[`flower`](https://pypi.python.org/pypi/flower) is a Celery Flower.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks. User input was not escaped in the tasks page, allowing remote attackers to inject arbitrary web script or HTML.

## Remediation
The fix is merged to the master branch but not yet published.

## References
- [GitHub Issue](https://github.com/mher/flower/issues/650)
- [GitHub PR](https://github.com/mher/flower/pull/651)
- [GitHub Commit](https://github.com/mher/flower/commit/ba454515ee13a2940e728dabfec25b136cce8a23)
