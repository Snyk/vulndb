## Overview
Affected version of [`github.com/docker/docker`](https://github.com/docker/docker) are vulnerable to Arbitrary Code Execution attacks.
Docker 1.3.2 allows remote attackers to execute arbitrary code with root privileges via a crafted (1) image or (2) build in a Dockerfile in an LZMA (.xz) archive, related to the chroot for archive extraction.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-9357)
- [GitHub Commit](https://github.com/docker/docker/compare/aef842e7dfb534aba22c3c911de525ce9ac12b72...313a1b7620910e47d888f8b0a6a5eb06ad9c1ff2)
- [Docker Security](https://groups.google.com/forum/#%21msg/docker-user/nFAz-B-n4Bw/0wr3wvLsnUwJ)
