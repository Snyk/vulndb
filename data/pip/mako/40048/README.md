## Overview
[`mako`](https://pypi.python.org/pypi/mako) is a A super-fast templating language that borrows the  best ideas from the existing templating languages.
Mako before 0.3.4 relies on the cgi.escape function in the Python standard library for cross-site scripting (XSS) protection, which makes it easier for remote attackers to conduct XSS attacks via vectors involving single-quote characters and a JavaScript onLoad event handler for a BODY element.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2010-2480)
- [Openwall](http://www.openwall.com/lists/oss-security/2010/06/30/9)
