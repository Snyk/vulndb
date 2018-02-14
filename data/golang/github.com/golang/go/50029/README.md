## Overview
Affected version of [`github.com/golang/go`](https://github.com/golang/go) are vulnerable to Elliptic Curve Key Disclosure.
A bug in the standard library ScalarMult implementation of curve P-256 for amd64 architectures in Go before 1.7.6 and 1.8.x before 1.8.2 causes incorrect results to be generated for specific input points. An adaptive attack can be mounted to progressively extract the scalar input to ScalarMult by submitting crafted points and observing failures to the derive correct output. This leads to a full key recovery attack against static ECDH, as used in popular JWT libraries.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-8932)
- [GitHub Commit](https://github.com/golang/go/commit/9294fa2749ffee7edbbb817a0ef9fe633136fa9c)
