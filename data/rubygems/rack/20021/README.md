## Overview
[`rack`](https://rubygems.org/gems/rack) is a minimal, modular and adaptable interface for developing web applications in Ruby.
Affected versions of this Gem are vulnerable to Denial of Service (DoS) attacks.

## Details
`Rack` contains a flaw that may allow a remote denial of service. The issue is triggered when an attacker sends multiple crafted parameters which trigger hash collisions, and will result in loss of availability for the program via CPU consumption.

## References
- http://rubysec.com/advisories/CVE-2011-5036
