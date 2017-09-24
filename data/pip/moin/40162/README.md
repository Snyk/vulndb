## Overview
[`moin`](https://pypi.python.org/pypi/moin) is an easy to use, full-featured and extensible wiki software package.

Multiple unrestricted file upload vulnerabilities in the (1) twikidraw (action/twikidraw.py) and (2) anywikidraw (action/anywikidraw.py) actions in MoinMoin before 1.9.6 allow remote authenticated users with write permissions to execute arbitrary code by uploading a file with an executable extension, then accessing it via a direct request to the file in an unspecified directory, as exploited in the wild in July 2012.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-6081)
- [Moin Issue](http://hg.moinmo.in/moin/1.9/rev/7e7e1cbb9d3f)
