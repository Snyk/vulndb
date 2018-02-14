## Overview
Affected version of [`github.com/opencontainers/runc/libcontainer/user`](https://github.com/opencontainers/runc) are vulnerable to Privilege Elevation.
libcontainer/user/user.go in runC before 0.1.0, as used in Docker before 1.11.2, improperly treats a numeric UID as a potential username, which allows local users to gain privileges via a numeric username in the password file in a container.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-3697)
- [GitHub Release Notes](https://github.com/opencontainers/runc/releases/tag/v0.1.0)
- [GitHub Commit](https://github.com/opencontainers/runc/commit/69af385de62ea68e2e608335cffbb0f4aa3db091),
- [GitHub Issue](https://github.com/docker/docker/issues/21436)
- [GitHub PR](https://github.com/opencontainers/runc/pull/708)
- [Redhat Security Advisory](http://rhn.redhat.com/errata/RHSA-2016-1034.html),
