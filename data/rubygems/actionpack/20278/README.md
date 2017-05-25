## Overview
[`actionpack`](https://rubygems.org/gems/actionpack) is a web app builder and tester on Rails.
To list the templates available to an application, `actionpack` uses the filesystem operations. While using case-insensitive filesystems, an attacker may change the case of an action name, and use this to bypass authentication processes and leak sensitive data.

## Remediation
Upgrade to version `3.0.4` or higher.

## References
- [Ruby on Rails blog](http://weblog.rubyonrails.org/2011/2/8/new-releases-2-3-11-and-3-0-4/)
- [Ruby Security forum](https://groups.google.com/forum/#!topic/rubyonrails-security/Ni8fvBdhszY)
- [Security Tracker](http://securitytracker.com/id?1025061)
