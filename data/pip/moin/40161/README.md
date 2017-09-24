## Overview
[`moin`](https://pypi.python.org/pypi/moin) is an easy to use, full-featured and extensible wiki software package.

Directory traversal vulnerability in the `_do_attachment_move` function in the AttachFile action (action/AttachFile.py) in MoinMoin 1.9.3 through 1.9.5 allows remote attackers to overwrite arbitrary files via a .. (dot dot) in a file name.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-6080)
- [Moin Issue](http://hg.moinmo.in/moin/1.9/rev/3c27131a3c52)
