## Overview

[`twitter-bootstrap-rails`](https://rubygems.org/gems/twitter-bootstrap-rails) is a gem that integrates Bootstrap CSS toolkit for Rails.

Affected versions of this gem contain a Cross-Site Scripting (XSS) vulnerability. This is due to a `bootstrap_flash` helper method that does not validate input before returning it to users. This may allow an attacker to inject and execute scripts in a user's browser.

## References

- https://nvisium.com/blog/2014/03/28/reflected-xss-vulnerability-in-twitter/
- https://github.com/seyhunak/twitter-bootstrap-rails/commit/663760e67b80ee25adc293bf5f03debae28b5af9
