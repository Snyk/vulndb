## Overview
[`suds`](https://pypi.python.org/pypi/suds) is a Lightweight SOAP client
cache.py in Suds 0.4, when tempdir is set to None, allows local users to redirect SOAP queries and possibly have other unspecified impact via a symlink attack on a cache file with a predictable name in /tmp/suds/.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-2217)
- [Openwall](http://www.openwall.com/lists/oss-security/2013/06/27/8)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=978696)
