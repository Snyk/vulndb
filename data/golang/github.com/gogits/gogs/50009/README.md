## Overview
Affected version of [`github.com/gogits/gogs`](https://github.com/gogits/gogs) are vulnerable to SQL Injection.
Multiple SQL injection vulnerabilities in Gogs (aka Go Git Service) 0.3.1-9 through 0.5.x before 0.5.6.1105 Beta allow remote attackers to execute arbitrary SQL commands via the q parameter to (1) api/v1/repos/search, which is not properly handled in models/repo.go, or (2) api/v1/users/search, which is not properly handled in models/user.go.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-8682)
- [GitHub Commit](https://github.com/gogits/gogs/commit/0c5ba4573aecc9eaed669e9431a70a5d9f184b8d)
- [GitHub Changelog](https://github.com/gogits/gogs/releases/tag/v0.5.8)
- [Packetstorm Security](http://packetstormsecurity.com/files/129116/Gogs-Label-Search-Blind-SQL-Injection.html)
- [Seclists](http://seclists.org/fulldisclosure/2014/Nov/31)
