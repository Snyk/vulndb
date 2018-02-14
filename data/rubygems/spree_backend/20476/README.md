## Overview
[`spree_backend`](https://rubygems.org/gems/spree_backend) is Required dependency for Spree.

Affected versions of the package are vulnerable to Cross-site Scripting (XSS).
An attacker can potentially inject html into the admin by registering with a  specially crafted email. This could lead to injecting javascript into the admin and stealing the admin's API key and other credentials.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/xss-attacks-the-next-wave/).

## Remediation
There is no fix version for `spree_backend`.

## References
- [Github Commit #1](https://github.com/solidusio/solidus/commit/06458322235df61e7180cf03d3c7c777c0a52afb)
- [Github Commit #2](https://github.com/solidusio/solidus/commit/29706e76a141d5369fecbb907678e3cb2c56083e)
- [Github Commit #3](https://github.com/solidusio/solidus/commit/7285ca3607b8f8d396f54c975491e4c4f5702cb4)
- [Google Group post](https://groups.google.com/forum/#!topic/solidus-security/8LGeHi-fXYc)
