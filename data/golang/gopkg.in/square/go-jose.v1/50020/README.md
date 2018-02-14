## Overview
Affected version of [`github.com/square/go-jose`](https://github.com/square/go-jose) are vulnerable to Signature Validation Bypass.
go-jose before 1.0.4 suffers from multiple signatures exploitation. The go-jose library supports messages with multiple signatures. However, when validating a signed message the API did not indicate which signature was valid, which could potentially lead to confusion. For example, users of the library might mistakenly read protected header values from an attached signature that was different from the one originally validated.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-9122)
- [GitHub Commit](https://github.com/square/go-jose/commit/2c5656adca9909843c4ff50acf1d2cf8f32da7e6)
- [Openwall](http://www.openwall.com/lists/oss-security/2016/11/03/1)
- [HackerOne Report](https://hackerone.com/reports/169629)
