## Overview
[`tweepy`](https://pypi.python.org/pypi/tweepy) is a Twitter library for python
Tweepy does not verify that the server hostname matches a domain name in the subject's Common Name (CN) or subjectAltName field of the X.509 certificate, which allows man-in-the-middle attackers to spoof SSL servers via an arbitrary valid certificate, related to use of the Python httplib library.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-5825)
- [The University of Texas](http://www.cs.utexas.edu/~shmat/shmat_ccs12.pdf)
