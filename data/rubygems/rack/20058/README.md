## Overview
[`rack`](https://rubygems.org/gems/rack) is a minimal, modular and adaptable interface for developing web applications in Ruby.
Affected versions of this Gem are vulnerable to Arbitrary file disclosure.

## Details
Rack contains a flaw as the `Rack::File` function creates temporary files insecurely. It is possible for a local attacker to use a symlink attack to traverse to an arbitrary file and disclose its contents

## References
- http://rubysec.com/advisories/CVE-2013-0262
