## Overview
[`python-fedora`](http://pypi.python.org/pypi/python-fedora) is a python modules for interacting with Fedora Services.

Affected versions of the package are vulnerable to Cross-Site Request Forgery (CSRF).
python-fedora 0.8.0 and lower is vulnerable to an open redirect resulting in loss of CSRF protection

## Remediation
Upgrade `python-fedora` to version 0.9.0 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-1002150)
- [Github Commit](https://github.com/fedora-infra/python-fedora/commit/b27f38a67573f4c989710c9bfb726dd4c1eeb929)
