## Overview
Affected version of [`github.com/gogits/gogs`](https://github.com/gogits/gogs) are vulnerable to Cross-site Scripting (XSS) attacks.
Cross-site Scripting (XSS) vulnerability in models/issue.go in Gogs (aka Go Git Service) 0.3.1-9 through 0.5.x before 0.5.8 allows remote attackers to inject arbitrary web script or HTML via the text parameter to api/v1/markdown.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-8683)
- [GitHub Commit](https://github.com/gogits/gogs/commit/3abc41cccab2486012b46305827433ad6f5deade)
- [GitHub Changelog](https://github.com/gogits/gogs/releases/tag/v0.5.8)
- [Packetstorm Security](http://packetstormsecurity.com/files/129118/Gogs-Markdown-Renderer-Cross-Site-Scripting.html)
- [Seclists](http://seclists.org/fulldisclosure/2014/Nov/31)
