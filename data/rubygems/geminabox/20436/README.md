## Overview
[`geminabox`](https://rubygems.org/gems/geminabox) is a sinatra based gem hosting app, with client side gem push style functionality.

Affected versions of this package are vulnerable to Cross-Site Scripting (XSS) attacks.
geminabox (aka Gem in a Box) before 0.13.6 has XSS, as demonstrated by uploading a gem file that has a crafted gem.homepage value in its .gemspec file.

When using user input to perform tasks on the server, characters like \< \> \" \' must escaped properly. Otherwise, an attacker can manipulate the input to introduce additional attributes, potentially executing code. This may lead to a Cross-Site Scripting (XSS) vulnerability, assuming an attacker can influence the value entered into the template.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `geminabox` to version 0.13.6 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-14506)
- [Github ChangeLog](https://github.com/geminabox/geminabox/blob/master/CHANGELOG.md#0136-2017-09-19)
- [Github PR](https://github.com/geminabox/geminabox/pull/279)
- [Github Commit](https://github.com/geminabox/geminabox/commit/99aaae196c4fc6ae0df28e186ca1e493ae658e02)
