## Overview
[`mail`](https://rubygems.org/gems/mail) is a Ruby Mail handler gem.

Affected versions of this gem do not validate or impose a length limit on email address fields. This means that an attacker can modify messages sent with the gem via a specially-crafted recipient email address.

**Note:**

1. Applications that validate email address format are not affected by this vulnerability.

2. Applications considered vulnerable:
    * Use `mail`, versions `<2.5.5` on Ruby `<2.4.0`
    * All net/smtp users on Ruby `<2.4.0` (See [CVE-2015-9096](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-9096))

## References
- [Rubysec Advisory](http://rubysec.com/advisories/OSVDB-131677)
- [Takeshi Terada's Security Report](http://www.mbsd.jp/Whitepaper/smtpi.pdf)
- [HackerOne Report](https://hackerone.com/reports/137631)
