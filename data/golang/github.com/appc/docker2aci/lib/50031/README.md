## Overview
Affected version of [`github.com/appc/docker2aci`](https://github.com/appc/docker2aci) are vulnerable to Directory Traversal.
Directory traversal vulnerability in docker2aci before 0.13.0 allows remote attackers to write to arbitrary files via a .. (dot dot) in the embedded layer data in an image.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-7569)
- [GitHub Issue](https://github.com/appc/docker2aci/issues/201)
- [GitHub Commit](https://github.com/appc/docker2aci/commit/2ab8826d6957d97ed64e5e29a484af6370eae2e1)
- [GitHub Changelog](https://github.com/appc/docker2aci/releases/tag/v0.13.0)
- [Openwall](http://www.openwall.com/lists/oss-security/2016/09/28/2)
