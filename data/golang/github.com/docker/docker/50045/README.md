## Overview
Affected version of [`github.com/docker/docker`](https://github.com/docker/docker) are vulnerable to Arbitrary File Write.
Libcontainer 1.6.0, as used in Docker Engine, allows local users to escape containerization ("mount namespace breakout") and write to arbitrary file on the host system via a symlink attack in an image when respawning a container.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-3629)
- [GitHub Commit](https://github.com/docker/docker/commit/d5ebb60bddbabea0439213501f4f6ed494b23cba)
- [Packetstorm Security](http://packetstormsecurity.com/files/131835/Docker-Privilege-Escalation-Information-Disclosure.html)
- [Seclists](http://seclists.org/fulldisclosure/2015/May/28)
- [Docker Security Advisory](https://groups.google.com/forum/#%21searchin/docker-user/1.6.1/docker-user/47GZrihtr-4/nwgeOOFLexIJ)
