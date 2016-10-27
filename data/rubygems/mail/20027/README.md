## Overview

[`mail`](https://rubygems.org/gems/mail) is a Ruby Mail handler gem.

Affected versions of this gem contains a flaw within the `sendmail` and `exim` delivery methods, which may allow an attacker to execute arbitrary shell commands.

## References

- http://rubysec.com/advisories/CVE-2012-2140/
- http://www.osvdb.org/show/osvdb/81632
- http://www.openwall.com/lists/oss-security/2012/04/25/8
