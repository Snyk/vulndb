## Overview
[`actionpack`](https://rubygems.org/gems/actionpack) is a web app builder and tester on Rails.
Affected versions of this Gem are vulnerable to Cross-site Scripting (XSS) attacks.

## Details
The `strip_tags` helper method does not validate input passed before returning it to the user. This may allow an attacker to create a specially crafted request that would manipulate the parser and cause HTML tags to be injected into the response.  This can be exploited to inject arbitrary javascript into the rendered page.

## References
- [Ruby Security forum](https://groups.google.com/forum/#!topic/rubyonrails-security/K5EwdJt06hI)
- [Redhat](https://bugzilla.redhat.com/show_bug.cgi?id=731436)
- [Github Commit](https://github.com/rails/rails/commit/586a944ddd4d03e66dea1093306147594748037a)
