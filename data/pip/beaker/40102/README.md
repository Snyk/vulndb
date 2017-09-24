## Overview
[`beaker`](https://pypi.python.org/pypi/beaker) is a A Session and Caching library with WSGI Middleware
Beaker before 1.6.4, when using PyCrypto to encrypt sessions, uses AES in ECB cipher mode, which might allow remote attackers to obtain portions of sensitive session data via unspecified vectors.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-3458)
- [Openwall](http://www.openwall.com/lists/oss-security/2012/08/13/10)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=809267)
- [GitHub Commit](https://github.com/bbangert/beaker/commit/91becae76101cf87ce8cbfabe3af2622fc328fe5)
