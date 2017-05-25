## Overview
[`actionpack`](https://rubygems.org/gems/actionpack) is a web app builder and tester on Rails.
The `to_s` method in `actionpack` does not validate the `X-Forwarded-For` header in requests from IP addresses on a Class C network, which might allow remote attackers to inject arbitrary text into log files or bypass intended address parsing via a crafted header.

## References
- [Proof-of-Concept](https://gist.github.com/rand99/868268)
- [Webservsec Blog](http://webservsec.blogspot.co.il/2011/02/ruby-on-rails-vulnerability.html)
- [Redhat](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2011-3187)
