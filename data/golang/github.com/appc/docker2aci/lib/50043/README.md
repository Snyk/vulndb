## Overview
Affected version of [`github.com/appc/docker2aci/lib`](https://github.com/appc/docker2aci) are vulnerable to Denial of Service (DoS) attacks.
docker2aci <= 0.12.3 has an infinite loop when handling local images with cyclic dependency chain.


## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-8579)
- [GitHub Issue](https://github.com/appc/docker2aci/issues/203)
- [GitHub Commit](https://github.com/appc/docker2aci/pull/204/commits/54331ec7020e102935c31096f336d31f6400064f)
- [GitHub Changelog](https://github.com/appc/docker2aci/releases/tag/v0.13.0)
