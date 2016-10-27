## Overview

[`mail`](https://rubygems.org/gems/mail) is a Ruby Mail handler gem.

Affected versions of this gem allow a remote attacker to traverse outside of a restricted path. This is due to the program not properly sanitizing user input, specifically directory traversal style attacks (e.g. `../../`) supplied via the `to` parameter within the delivery method.

This directory traversal attack would allow the attacker to modify arbitrary files.

## References

- http://rubysec.com/advisories/CVE-2012-2139/
- http://www.openwall.com/lists/oss-security/2012/04/25/8
- https://github.com/mikel/mail/commit/29aca25218e4c82991400eb9b0c933626aefc98f
