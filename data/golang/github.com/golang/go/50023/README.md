## Overview
Affected version of [`github.com/golang/go`](https://github.com/golang/go) are vulnerable to Denial Of Service (DoS).
The Verify function in crypto/dsa/dsa.go in Go before 1.5.4 and 1.6.x before 1.6.1 does not properly check parameters passed to the big integer library, which might allow remote attackers to cause a denial of service (infinite loop) via a crafted public key to a program that uses HTTPS client certificates or SSH server libraries.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-3959)
- [GitHub Commit](https://github.com/golang/go/commit/2cfbb875208f4acecfb0b72de5aebe37e8d03a35)
- [Openwall](http://www.openwall.com/lists/oss-security/2016/04/05/2)
- [Go Security Advisory](https://groups.google.com/forum/#%21topic/golang-announce/9eqIHqaWvck)
