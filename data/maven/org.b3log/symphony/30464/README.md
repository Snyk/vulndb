## Overview
[`org.b3log:symphony`](http://b3log.org) is a modern community platform

b3log Symphony (aka Sym) 2.2.0 does not properly address XSS in JSON objects, as demonstrated by a crafted userAvatarURL value to /settings/avatar, related to processor/AdminProcessor.java, processor/ArticleProcessor.java, processor/UserProcessor.java, service/ArticleQueryService.java, service/AvatarQueryService.java, and service/CommentQueryService.java.

## Remediation
The fix is merged to the master branch but not yet published
## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-16881)
- [Github Issue](https://github.com/b3log/symphony/issues/504)
- [Github Commit](https://github.com/b3log/symphony/commit/75e3b6861d53693721f75f22a6ec1af2aa041836)
