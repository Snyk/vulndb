## Overview
[`actionpack`](https://rubygems.org/gems/actionpack) is a web app builder and tester on Rails.
Affected versions of this package are vulnerable to Cross-site Request Forgery (CSRF) attacks.

## Details
HTTP requests are not properly validated, and will allow requests containing an X-Requested-With header to be manipulated by an attacker. By spoofing AJAX requests and API requests that leverage a combination of browser plugins and HTTP redirects, an attacker may bypass the built in CSRF protection and successfully attack an application.


## References
- [Ruby on Rails Blog #1](http://weblog.rubyonrails.org/2011/2/8/csrf-protection-bypass-in-ruby-on-rails/)
- [Ruby on Rails blog #2](http://weblog.rubyonrails.org/2011/2/8/new-releases-2-3-11-and-3-0-4/)
- [Ruby Security forum](https://groups.google.com/forum/#!topic/rubyonrails-security/LZWjzCPgNmU)
- [Security Tracker](http://www.securitytracker.com/id?1025064)
