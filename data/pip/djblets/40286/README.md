## Overview
[`djblets`](https://pypi.python.org/pypi/djblets) is a A collection of useful classes and functions for developing large-scale Django-based web applications.
Cross-site Scripting (XSS) vulnerability in gravatars/templatetags/gravatars.py in Djblets before 0.7.30 and 0.8.x before 0.8.3 for Django allows remote attackers to inject arbitrary web script or HTML via a user display name.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-3994)
- [oss sec](http://seclists.org/oss-sec/2014/q2/494)
- [GitHub Commit #1](https://github.com/djblets/djblets/commit/50000d0bbb983fa8c097b588d06b64df8df483bd)
- [GitHub Commit #2](https://github.com/djblets/djblets/commit/77ac64642ad530bf69e390c51fc6fdcb8914c8e7)
- [GitHub Commit #3](https://github.com/djblets/djblets/commit/e2c79117efd925636acd871a5f473512602243cf)
