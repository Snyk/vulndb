## Overview
[`rack`](https://rubygems.org/gems/rack) is a minimal, modular and adaptable interface for developing web applications in Ruby. 
Affected versions of this Gem are vulnerable to Denial of Service (DoS) attacks.

## Details
Rack contains a flaw that may allow a remote denial of service. The issue is triggered when parsing an overly long string. With a specially crafted string, a remote attacker can cause a consumption of memory. This will result in a loss of availability for the webserver.

## References
- http://rubysec.com/advisories/CVE-2013-0183
