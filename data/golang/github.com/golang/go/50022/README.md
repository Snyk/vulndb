## Overview
Affected version of [`github.com/golang/go`](https://github.com/golang/go) are vulnerable to DLL Preloading attacks.
On Windows, Go loads system DLLs by name with LoadLibrary, making it vulnerable to DLL preloading attacks. Notably, if a user launched a Go executable from their Downloads folder and malicious DLLs were in their Downloads folder.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-3958)
- [GitHub Commit](https://github.com/golang/go/compare/4afe4c803ec378d7a0d7fbc38d961df541d72134...16c42047effe28edd5a827bec4b198ffc83f5ec8)
- [Openwall](http://www.openwall.com/lists/oss-security/2016/04/05/2)
- [GitHub Issue](https://github.com/golang/go/issues/14959)
- [Go Security Advisory](https://groups.google.com/forum/#%21topic/golang-announce/9eqIHqaWvck)
