## Overview
[`devise-two-factor`](https://rubygems.org/gems/devise-two-factor) is a two-factor authentication addition to [`devise`](https://rubygems.org/gems/devise).

Affected versions do not mark used TOTP (Time-Based One-Time Password) verification codes once used, and allow their reuse during the timestep period of the code. This can be exploited by an attacker with knowledge of the authentication credentials AND access to the TOTP verification code that was just used.

## References
- http://rubysec.com/advisories/CVE-2015-7225
- http://www.openwall.com/lists/oss-security/2015/09/06/2
