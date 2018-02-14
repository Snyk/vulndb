## Overview
[`moin`](https://pypi.python.org/pypi/moin) is an easy to use, full-featured and extensible wiki software package.

Cross-site Scripting (XSS) vulnerability in the reStructuredText (rst) parser in parser/text_rst.py in MoinMoin before 1.9.3, when docutils is installed or when "format rst" is set, allows remote attackers to inject arbitrary web script or HTML via a javascript: URL in the refuri attribute.  NOTE: some of these details are obtained from third party information.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-1058)
- [Moin Issue](https://moinmo.in/SecurityFixes)
