## Overview
[`Safemode`](https://rubygems.org/gems/safemode) is a library for safe evaluation of Ruby code based on RubyParser and Ruby2Ruby.
This gem is initialized with an optional `delegate` object. If the delegated object is a Rails controller, `inspect` could be called which then exposes all informations about the App, including routes, secret tokens, caches and so on.

## References
- http://rubysec.com/advisories/CVE-2016-3693
- http://seclists.org/oss-sec/2016/q2/119
