## Overview
[`logilab-common`](https://pypi.python.org/pypi/logilab-common) is a collection of low-level Python packages and modules used by Logilab projects

Affected versions of this package are vulnerable to Insecure use of temporary file attacks.
The (1) extract_keys_from_pdf and (2) fill_pdf functions in pdf_ext.py in logilab-commons before 0.61.0 allows local users to overwrite arbitrary files and possibly have other unspecified impact via a symlink attack on /tmp/toto.fdf.

## Remediation
Upgrade to version `0.61.0` or greater.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-1838)
- [oss-sec](http://seclists.org/oss-sec/2014/q1/226)
- [logilab](http://www.logilab.org/ticket/207561)
