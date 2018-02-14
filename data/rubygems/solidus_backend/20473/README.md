## Overview
[`solidus_backend`](https://rubygems.org/gems/solidus_backend) is an Admin interface for the Solidus e-commerce framework.

Affected versions of the package are vulnerable to Cross-site Scripting (XSS).
An attacker can potentially inject html into the admin by registering with a  specially crafted email. This could lead to injecting javascript into the admin and stealing the admin's API key and other credentials.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/xss-attacks-the-next-wave/).

## Remediation
Upgrade `solidus_backend` to version 1.2.1 or higher.

## References
- [Github Commit #1](https://github.com/solidusio/solidus/commit/371dc0a1c4387b7ed8e0f034ea6c952a28916bd0)
- [Github Commit #2](https://github.com/solidusio/solidus/commit/29706e76a141d5369fecbb907678e3cb2c56083e)
- [Github Commit #3](https://github.com/solidusio/solidus/commit/7285ca3607b8f8d396f54c975491e4c4f5702cb4)
- [Google Group post](https://groups.google.com/forum/#!topic/solidus-security/8LGeHi-fXYc)
