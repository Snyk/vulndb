## Overview
Affected version of [`github.com/bitly/oauth2_proxy`](https://github.com/bitly/oauth2_proxy) are vulnerable to Open Redirect.
The Bitly oauth2_proxy in version 2.1 and earlier was affected by an open redirect vulnerability during the start and termination of the 2-legged OAuth flow. This issue was caused by improper input validation and a violation of RFC-6819

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-1000070)
- [GitHub Issue](https://github.com/bitly/oauth2_proxy/issues/228)
- [GitHub PR](https://github.com/bitly/oauth2_proxy/pull/359)
- [GitHub Commit](https://github.com/bitly/oauth2_proxy/commit/289a6ccf463a425c7606178c510fc5eeb9c8b050)
