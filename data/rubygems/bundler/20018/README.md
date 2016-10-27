## Overview
[bundler](https://rubygems.org/gems/bundler) is a dependencies manager. 
Affected versions of this Gem contain a vulnerability due to the install command process listing credentials in plaintext. This may allow a local attacker to gain access to the credentials.

## References

- http://rubysec.com/advisories/OSVDB-115917
