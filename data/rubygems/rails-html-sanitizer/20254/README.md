## Overview
[rails-html-sanitizer](https://rubygems.org/gems/rails-html-sanitizer) is an HTML sanitization gem for Rails applications.
There is a XSS vulnerability in `Rails::Html::FullSanitizer` used by Action View's `strip_tags`.
Due to the way that `Rails::Html::FullSanitizer` is implemented, if an attacker passes an already escaped HTML entity to the input of Action View's `strip_tags` these entities will be unescaped what may cause a XSS attack if used in combination with `raw` or `html_safe`.

## References
- http://rubysec.com/advisories/CVE-2015-7579
- https://groups.google.com/forum/#!topic/rubyonrails-security/OU9ugTZcbjc
