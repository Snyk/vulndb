## Overview
[`jinja2`](https://pypi.python.org/pypi/jinja2) is a A small but fast and easy to use stand-alone template engine written in pure python.
FileSystemBytecodeCache in Jinja2 2.7.2 does not properly create temporary directories, which allows local users to gain privileges by pre-creating a temporary directory with a user's uid.  

**NOTE:** this vulnerability exists because of an incomplete fix for [CVE-2014-1402](https://snyk.io/vulnSNYK-PYTHON-JINJA2-40028).

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-0012)
- [Bugzilla redhat](https://bugzilla.redhat.com/show_bug.cgi?id=1051421)
- [GitHub PR #1](https://github.com/mitsuhiko/jinja2/pull/292)
- [GitHub PR #2](https://github.com/mitsuhiko/jinja2/pull/296)
- [GitHub Commit](https://github.com/mitsuhiko/jinja2/commit/acb672b6a179567632e032f547582f30fa2f4aa7)
