## Overview
[`easywidgets`](http://pypi.python.org/pypi/EasyWidgets) is A minimalistic approach to HTML generation and validation with TurboGears.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks.

When using user input to perform tasks on the server, characters like \< \> \" \' must escaped properly. Otherwise, an attacker can manipulate the input to introduce additional attributes, potentially executing code. This may lead to a Cross-site Scripting (XSS) vulnerability, assuming an attacker can influence the value entered into the template.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `easywidgets` to version 0.2dev-20150922 or higher.

## References
- [BitBucket PR](https://bitbucket.org/rick446/easywidgets/pull-requests/3)
- [BitBucket Commit](https://bitbucket.org/rick446/easywidgets/commits/cb446d6b0b5f9597c3761e61facfa1fac34b8e5c?at&#x3D;default)
