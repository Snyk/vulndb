## Overview
[`actionpack`](https://rubygems.org/gems/actionpack) is a web app builder and tester on Rails.
Applications using `:encode => :javascript` are vulnerable to Cross-site Scritping (XSS) attacks. This configuration allows attackers to use a specially crafted name or email value and leverage that to inject arbitrary script or HTML.

## References
- [Ruby on Rails blog](http://weblog.rubyonrails.org/2011/2/8/new-releases-2-3-11-and-3-0-4/)
- [Ruby Security forum](https://groups.google.com/forum/#!searchin/rubyonrails-security/CVE-2011-0446/rubyonrails-security/8CpI7egxX4E/SmtqtyOKWzYJ)
- [Security Tracker](http://www.securitytracker.com/id?1025064)
