## Overview
Affected versions of [`github.com/golang/crypto/ssh`](https://github.com/golang/crypto/tree/master/ssh) are vulnerable to Man-in-the-middle (MitM) attacks.
The Go SSH library (x/crypto/ssh) by default does not verify host keys, facilitating man-in-the-middle attacks. Default behavior changed in commit [e4e2799](https://github.com/golang/crypto/commit/e4e2799dd7aab89f583e1d898300d96367750991) to require explicitly registering a hostkey verification mechanism.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-3204)
- [GitHub Commit](https://github.com/golang/crypto/commit/e4e2799dd7aab89f583e1d898300d96367750991)
- [Paul Pennock Blog](https://bridge.grumpy-troll.org/2017/04/golang-ssh-security/)
- [GitHub Issue](https://github.com/golang/go/issues/19767)
