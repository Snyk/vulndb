## Overview
[`rack`](https://rubygems.org/gems/rack) is a minimal, modular and adaptable interface for developing web applications in Ruby.
Affected versions of this Gem are vulnerable to Denial of Service (DoS) attacks.

## Details
Rack contains a flaw in the Regular Expressions Engine that may allow a remote denial of service. The issue is triggered when parsing `context-disposition` headers. With a specially crafted header, a remote attacker can cause an infinite loop, which will result in a loss of availability for the webserver.

## References
- http://rubysec.com/advisories/CVE-2012-6109
