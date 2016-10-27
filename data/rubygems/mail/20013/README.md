## Overview

[`mail`](https://rubygems.org/gems/mail) is a Ruby Mail handler gem.

Affected versions of this gem do not properly sanitise input passed from an email from address in the `deliver()` function in `lib/mail/network/delivery_methods/sendmail.rb` before being used as a command line argument. This may allow a remote attacker to inject arbitrary shell commands.

## References

- http://rubysec.com/advisories/CVE-2011-0739/
- https://raw.githubusercontent.com/mikel/mail/master/patches/20110126_sendmail.patch
- https://groups.google.com/forum/#!topic/mail-ruby/6Tu9BXBkeN0
