## Overview
[`mediaelement`](https://www.npmjs.com/package/mediaelement) is an HTML5 audio or video player.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) due to not sanitizing HTML.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `mediaelement` to version 2.21.0 or higher.

## References
- [Oss-sec](http://seclists.org/oss-sec/2016/q2/275)
- [GitHub Commit](https://github.com/johndyer/mediaelement/commit/24c6ad056d3f43a78a011ec145f1f099f2a1cdbf)
