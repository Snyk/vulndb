## Overview
[`Paperclip`](https://rubygems.org/gems/paperclip) is an upload management gem for ActiveRecord.

Affected versions of this package are vulnerable to Server-Side Request Forgery (SSRF) attacks.
Paperclip ruby gem version 3.1.4 and later suffers from a Server-Side Request Forgery (SSRF) vulnerability in the Paperclip::UriAdapter class. Attackers may be able to access information about internal network resources.

## References
- [GitHub PR](https://github.com/thoughtbot/paperclip/pull/2435)
- [Hackerone Report](https://hackerone.com/reports/209430)
- [Hackerone Report](https://hackerone.com/reports/713)
