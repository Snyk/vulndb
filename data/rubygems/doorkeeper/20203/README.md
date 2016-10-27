## Overview
[`doorkeeper`](https://rubygems.org/gems/doorkeeper) is an Oauth 2.0 provider for Rails and Grape.

Affected versions contain a Cross-site request forgery (CSRF) vulnerability that allows remote attackers to hijack the user's OAuth autorization code. Without CSRF protection on its endpoints, Doorkeeper exposes a user's authorization code with arbitrary scope.

## References
- http://rubysec.com/advisories/CVE-2014-8144
- https://groups.google.com/forum/#!topic/ruby-security-ann/5_VqJtNc8jw
