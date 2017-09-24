## Overview
[`flask_oidc`](https://pypi.python.org/pypi/flask_oidc) is a OpenID Connect extension for Flask
flask-oidc version 0.1.2 and earlier is vulnerable to an open redirect

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-1000001)
- [DWF Artifact](https://github.com/distributedweaknessfiling/DWF-Database-Artifacts/blob/master/DWF/2016/1000001/CVE-2016-1000001.json)
- [GitHub Vulnerable Line](https://github.com/puiterwijk/flask-oidc/blob/master/flask_oidc/__init__.py#L293)
