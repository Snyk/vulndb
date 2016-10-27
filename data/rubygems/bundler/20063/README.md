## Overview

[bundler](https://rubygems.org/gems/bundler) is a dependencies manager. 
Affected versions of this Gem contain a flaw as SSL certificates are not properly validated. By spoofing the SSL server via a certificate that appears valid, an attacker with the ability to intercept network traffic (e.g. MiTM, DNS cache poisoning) can disclose and optionally manipulate transmitted data.


## References

- http://rubysec.com/advisories/OSVDB-115090
