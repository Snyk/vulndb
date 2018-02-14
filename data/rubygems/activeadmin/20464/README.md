## Overview
[`activeadmin`](https://rubygems.org/gems/activeadmin) is the administration framework for Ruby on Rails.

Affected Versions of this package are vulnerable to Cross-Site Scripting (XSS) attacks.

When using user input to perform tasks on the server, characters like \< \> \" \' must escaped properly. Otherwise, an attacker can manipulate the input to introduce additional attributes, potentially executing code. This may lead to a Cross-Site Scripting (XSS) vulnerability, assuming an attacker can influence the value entered into the template.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `activeadmin` to version 0.1.0 or higher.

## References
- [Github Commit](https://github.com/activeadmin/activeadmin/commit/c4161cbb36a54eb3654dd2bd487c4e782c5ebb69)
