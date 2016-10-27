## Overview

[`rack-ssl`](https://rubygems.org/gems/rack-ssl) is Rack middleware to force SSL/TLS.

Affected versions of this gem allow an attacker to execute a Cross-site Scripting (XSS) attack. This is because the gem does not validate input passed via error messages before returning it to users.

This may allow a context-dependent attacker to create a specially crafted request that would execute arbitrary script code in a user's browser.

## References

- http://www.openwall.com/lists/oss-security/2014/03/19/20
- https://github.com/josh/rack-ssl/commit/9d7d7300b907e496db68d89d07fbc2e0df0b487b
- http://lists.opensuse.org/opensuse-updates/2014-04/msg00032.html
