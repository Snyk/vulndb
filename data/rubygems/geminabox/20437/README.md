## Overview
[`geminabox`](https://rubygems.org/gems/geminabox) is a sinatra based gem hosting app, with client side gem push style functionality.

Affected versions of the package are vulnerable to Cross-Site Request Forgery (CSRF).
geminabox (aka Gem in a Box) before 0.13.7 has CSRF, as demonstrated by an unintended gem upload.

## Remediation
Upgrade `geminabox` to version 0.13.7 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-14683)
- [Github ChangeLog](https://github.com/geminabox/geminabox/blob/master/CHANGELOG.md#0137-2017-09-23)
- [Github PR](https://github.com/geminabox/geminabox/pull/280)
- [Github Commit](https://github.com/geminabox/geminabox/commit/0dc203b6cef5b9f379f2ef6a24a723f852589ee2)
