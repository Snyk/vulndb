## Overview
[`jquery-ujs`](https://github.com/rails/jquery-ujs) is a Ruby on Rails unobtrusive scripting adapter for jQuery.

Affected versions allow a CSRF attack with a maliciously crafted anchor element. In the scenario where an attacker might be able to control the href attribute of an anchor tag or the action attribute of a form tag that will trigger a POST action, the attacker can set the href or action to " https://attacker.com" (note the leading space). This will be passed to JQuery, and be treated as a same origin request, potentially send the user's CSRF token to the attacker domain.

## References
- http://rubysec.com/advisories/CVE-2015-1840
- https://groups.google.com/forum/#!topic/ruby-security-ann/XIZPbobuwaY
- http://blog.honeybadger.io/understanding-the-rails-jquery-csrf-vulnerability-cve-2015-1840/
