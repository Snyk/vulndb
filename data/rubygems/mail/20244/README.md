## Overview

[`mail`](https://rubygems.org/gems/mail) is a Ruby Mail handler gem.

Affected versions of this gem do not validate or impose a length limit on email address fields. This means that an attacker can modify messages sent with the gem via a specially-crafted recipient email address.

Applications that validate email address format are not affected by this vulnerability.

## References

- http://rubysec.com/advisories/OSVDB-131677
- http://www.mbsd.jp/Whitepaper/smtpi.pdf
- https://hackerone.com/reports/137631
