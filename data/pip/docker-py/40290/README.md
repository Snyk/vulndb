## Overview
[`docker_py`](https://pypi.python.org/pypi/docker_py) is a Python client for Docker.
Docker before 1.3.1 and docker-py before 0.5.3 fall back to HTTP when the HTTPS connection to the registry fails, which allows man-in-the-middle attackers to conduct downgrade attacks and obtain authentication and image data by leveraging a network position between the client and the registry to block HTTPS traffic.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-5277)
- [Google group Post](https://groups.google.com/forum/#%21topic/docker-user/oYm0i3xShJU)
