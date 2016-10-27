## Overview
[`backup-agoddard`](https://rubygems.org/gems/backup-agoddard) allows to easily perform backup operations on both your remote and local environments.
Affected versions of this Gem are vulnerable to Process Table Local Plaintext Password Disclosure Attacks.

## Details
backup-agoddard Gem for Ruby contains a flaw in `/lib/backup/cli/utility.rb` that is due to the application exposing password information in plaintext in the process table. This may allow a local attacker to gain access to password information.

## References
- http://rubysec.com/advisories/CVE-2014-4993/
