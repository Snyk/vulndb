## Overview
[`ajenti`](https://pypi.python.org/pypi/ajenti) is the server administration panel
Multiple Cross-site Scripting (XSS) vulnerabilities in the respond_error function in routing.py in Eugene Pankov Ajenti before 1.2.21.7 allow remote attackers to inject arbitrary web script or HTML via the PATH_INFO to (1) resources.js or (2) resources.css in ajenti:static/, related to the traceback page.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-4301)
- [Netsparker Security Advsory](https://www.netsparker.com/web-applications-advisories/critical-xss-vulnerabilities-in-ajenti/)
