## Overview
[`mediaelement`](https://www.npmjs.com/package/mediaelement) is an HTML5 audio or video player.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) due to not sanitizing HTML.
You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `mediaelement` to version 3.1.2 or higher.

## References
- [Github Commit](https://github.com/johndyer/mediaelement/commit/fd88ce0e2fab8e02f8ab8e00a0b2bfc5769966cf)
