## Overview
[rails-html-sanitizer](https://rubygems.org/gems/rails-html-sanitizer) is an HTML sanitization gem for Rails applications.
There is a possible XSS vulnerability in the white list sanitizer in the rails-html-sanitizer gem.
Carefully crafted strings can cause user input to bypass the sanitization in the white list sanitizer which will can lead to an XSS attack.

## References
- http://rubysec.com/advisories/CVE-2015-7580
- https://groups.google.com/forum/#!topic/rubyonrails-security/uh--W4TDwmI
