## Overview
Affected version of [`github.com/golang/go`](https://github.com/golang/go) are vulnerable to Information Exposure.
The Int.Exp Montgomery code in the math/big library in Go 1.5.x before 1.5.3 mishandles carry propagation and produces incorrect output, which makes it easier for attackers to obtain private RSA keys via unspecified vectors.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-8618)
- [GitHub Issue](https://github.com/golang/go/issues/13515)
- [GitHub Commit](https://github.com/golang/go/commit/0027ed1872cdec08defe3b097c7123eaaf149e30)
- [Go Security Release](https://groups.google.com/forum/#%21topic/golang-announce/MEATuOi_ei4)
- [Openwall #1](http://www.openwall.com/lists/oss-security/2015/12/21/6)
- [Openwall #2](http://www.openwall.com/lists/oss-security/2015/12/22/9)
- [Openwall #3](http://www.openwall.com/lists/oss-security/2016/01/13/7)
