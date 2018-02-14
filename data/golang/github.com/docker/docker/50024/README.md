## Overview
Affected version of [`github.com/docker/docker`](https://github.com/docker/docker) are vulnerable to HTTP downgrade attacks.
Docker before 1.3.1 and docker-py before 0.5.3 fall back to HTTP when the HTTPS connection to the registry fails, which allows man-in-the-middle attackers to conduct downgrade attacks and obtain authentication and image data by leveraging a network position between the client and the registry to block HTTPS traffic.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-5277)
- [GitHub Commit](https://github.com/docker/docker/commit/8caacb18f8019dfda30d79c327397e5f5783c068)
- [Docker Security](https://groups.google.com/forum/#%21topic/docker-user/oYm0i3xShJU)
