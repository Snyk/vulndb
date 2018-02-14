## Overview
Affected version of [`github.com/golang/go`](https://github.com/golang/go) are vulnerable to Man-in-the-Middle (MitM) attacks.
crpyto/tls in Go 1.1 before 1.3.2, when SessionTicketsDisabled is enabled, allows man-in-the-middle attackers to spoof clients via unspecified vectors.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-7189)
- [GitHub Commit](https://github.com/golang/go/commit/247820ff6bfba6e1b7891f4bfc25511d68761d5d)
- [Openwall](http://www.openwall.com/lists/oss-security/2014/09/26/28)
- [Go Release Notes](https://groups.google.com/forum/#%21msg/golang-nuts/eeOHNw_shwU/OHALUmroA5kJ)
