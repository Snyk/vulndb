## Overview
[`actionmailer`](https://rubygems.org/gems/actionmailer) is an Email on Rails. A ruby gem that let's you compose, deliver, receive, and test emails using the familiar controller/view pattern.
Affected versions of this Gem do not sanitize format string specifiers (e.g. %s and %x) in user-supplied input when handling email addresses. This allows attackers to cause a Denial of Service.

## References
- http://rubysec.com/advisories/CVE-2013-4389/
- https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-4389
