## Overview
[`actionpack`](https://rubygems.org/gems/actionpack) is a web app builder and tester on Rails.
The template selection code contains a vulnerability which allows an attacker to craft a URL and cause Rails to render an arbitrary view, regardless of if they have permissions to view the template. This only affects 3.0 applications which use `:action` in their routes.

## References
- [Ruby on Rails blog](http://weblog.rubyonrails.org/2011/8/16/ann-rails-3-1-0-rc6/)
- [Ruby Security forum](https://groups.google.com/forum/#!topic/rubyonrails-security/NCCsca7TEtY)
- [GitHub Commit](https://github.com/rails/rails/commit/5f94b93279f6d0682fafb237c301302c107a9552)
- [Redhat](https://bugzilla.redhat.com/show_bug.cgi?id=731432)
