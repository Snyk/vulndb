## Overview
Affected version of [`github.com/gogits/gogs`](https://github.com/gogits/gogs) are vulnerable to SQL Injection.
SQL injection vulnerability in the GetIssues function in models/issue.go in Gogs (aka Go Git Service) 0.3.1-9 through 0.5.6.x before 0.5.6.1025 Beta allows remote attackers to execute arbitrary SQL commands via the label parameter to user/repos/issues.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-8681)
- [GitHub Commit](https://github.com/gogits/gogs/commit/83283bca4cb4e0f4ec48a28af680f0d88db3d2c8)
- [GitHub Changelog](https://github.com/gogits/gogs/releases/tag/v0.5.8)
- [Packetstorm Security](http://packetstormsecurity.com/files/129116/Gogs-Label-Search-Blind-SQL-Injection.html)
- [Seclists](http://seclists.org/fulldisclosure/2014/Nov/31)
