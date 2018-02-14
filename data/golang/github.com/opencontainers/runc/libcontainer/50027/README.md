## Overview
Affected version of [`github.com/opencontainers/runc/libcontainer`](https://github.com/opencontainers/runc) are vulnerable to Access Restriction Bypass.
Docker Engine 1.12.2 enabled ambient capabilities with misconfigured capability policies. This allowed malicious images to bypass user permissions to access files within the container filesystem or mounted volumes.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-8867)
- [GitHub Commit](https://github.com/opencontainers/runc/commit/6cda437855f57d5ea515e007bdc53e3e9dc29cab)
- http://www.securityfocus.com/bid/94228,https://www.docker.com/docker-cve-database
