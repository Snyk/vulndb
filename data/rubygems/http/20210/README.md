## Overview
[`http`](https://rubygems.org/gems/http) is a HTTP client library.

Affected versions fail to perform SSL hostname verification. It allows an attacker with a valid certificate mismatching subject to carry out an HTTPS MitM attack.

## References
- http://rubysec.com/advisories/CVE-2015-1828
- https://groups.google.com/forum/#!topic/httprb/jkb4oxwZjkU
