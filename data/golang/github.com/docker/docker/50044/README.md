## Overview
Affected version of [`github.com/docker/docker`](https://github.com/docker/docker) are vulnerable to Symlink Attacks.
Libcontainer and Docker Engine before 1.6.1 opens the file-descriptor passed to the pid-1 process before performing the chroot, which allows local users to gain privileges via a symlink attack in an image.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-3627)
- [GitHub Commit](https://github.com/docker/docker/commit/d5ebb60bddbabea0439213501f4f6ed494b23cba)
- [Packetstorm Security](http://packetstormsecurity.com/files/131835/Docker-Privilege-Escalation-Information-Disclosure.html)
- [Seclists](http://seclists.org/fulldisclosure/2015/May/28)
- [Docker Security Advisory](https://groups.google.com/forum/#%21searchin/docker-user/1.6.1/docker-user/47GZrihtr-4/nwgeOOFLexIJ)
