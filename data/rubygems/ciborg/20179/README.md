## Overview
[`ciborg`](https://rubygems.org/gems/ciborg) makes it easy to spin up a CI instance in the cloud.
Affected versions of this Gem are vulnerable to overwrite an arbitrary files.

## Details
ciborg Gem for Ruby contains a flaw as `default.rb` creates temporary files insecurely. It is possible for a local attacker to use a symlink attack against the /tmp/perlbrew-installer file to cause the program to unexpectedly overwrite an arbitrary file.

## References
- http://rubysec.com/advisories/CVE-2014-5003/
