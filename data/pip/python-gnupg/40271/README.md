## Overview
[`python-gnupg`](https://pypi.python.org/pypi/python-gnupg) is a wrapper for the Gnu Privacy Guard (GPG or GnuPG).

The shell_quote function in python-gnupg 0.3.5 does not properly escape characters, which allows context-dependent attackers to execute arbitrary code via shell metacharacters in unspecified vectors, as demonstrated using "\" (backslash) characters to form multi-command sequences, a different vulnerability than [CVE-2014-1927](https://snyk.io/vuln/SNYK-PYTHON-PYTHONGNUPG-40270).  

**NOTE:** this vulnerability exists because of an incomplete fix for [CVE-2013-7323](https://snyk.io/vuln/SNYK-PYTHON-PYTHONGNUPG-40248).

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-1928)
