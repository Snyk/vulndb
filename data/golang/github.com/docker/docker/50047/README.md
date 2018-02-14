## Overview
Affected version of [`github.com/docker/docker`](https://github.com/docker/docker) are vulnerable to Arbitrary File Override.
Docker Engine before 1.6.1 allows local users to set arbitrary Linux Security Modules (LSM) and docker_t policies via an image that allows volumes to override files in /proc.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-3631)
- [GitHub Commit](https://github.com/moby/moby/compare/769acfec2928c47a35da5357d854145b1036448d...b6a9dc399be31c531e3753104e10d74760ed75a2)
- [Packetstorm Security](http://packetstormsecurity.com/files/131835/Docker-Privilege-Escalation-Information-Disclosure.html)
- [Seclists](http://seclists.org/fulldisclosure/2015/May/28)
- [Docker Security Advisory](https://groups.google.com/forum/#%21searchin/docker-user/1.6.1/docker-user/47GZrihtr-4/nwgeOOFLexIJ)
