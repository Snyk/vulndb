## Overview
Affected version of [`github.com/docker/docker`](https://github.com/docker/docker) are vulnerable to Information Exposure.
Docker Engine before 1.6.1 uses weak permissions for (1) /proc/asound, (2) /proc/timer_stats, (3) /proc/latency_stats, and (4) /proc/fs, which allows local users to modify the host, obtain sensitive information, and perform protocol downgrade attacks via a crafted image.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-3630)
- [GitHub Commit](https://github.com/moby/moby/commit/545b440a80f676a506e5837678dd4c4f65e78660)
- [Packetstorm Security](http://packetstormsecurity.com/files/131835/Docker-Privilege-Escalation-Information-Disclosure.html)
- [Seclists](http://seclists.org/fulldisclosure/2015/May/28)
- [Docker Security Advisory](https://groups.google.com/forum/#%21searchin/docker-user/1.6.1/docker-user/47GZrihtr-4/nwgeOOFLexIJ)
