## Overview
[`moin`](https://pypi.python.org/pypi/moin) is an easy to use, full-featured and extensible wiki software package.

Multiple directory traversal vulnerabilities in the (1) twikidraw (action/twikidraw.py) and (2) anywikidraw (action/anywikidraw.py) actions in MoinMoin before 1.9.6 allow remote authenticated users with write permissions to overwrite arbitrary files via unspecified vectors.  NOTE: this can be leveraged with CVE-2012-6081 to execute arbitrary code.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-6495)
