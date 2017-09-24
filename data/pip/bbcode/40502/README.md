## Overview
[`bbcode`](https://pypi.python.org/pypi/bbcode) is a pure python bbcode parser and formatter.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks. An attacker can execute arbitrary code by including it within the URL bbcode tag: `[URL=data:text/html;base64,PHNjcmlwdD5hbGVydCgiMSIpOzwvc2NyaXB0Pg==]sdfsdf[/URL]`.

## References
- [GitHub Issue](https://github.com/dcwatson/bbcode/issues/4)
- [GitHub Commit](https://github.com/dcwatson/bbcode/commit/e23f5ae9f9e42a9988a52b8b39815593c264f3ce)
