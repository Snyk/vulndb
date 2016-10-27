## Overview

The [`RedCloth`](https://rubygems.org/gems/RedCloth) gem is a textile parser. Affected versions of this gem are vulnerable to Cross-site Scripting (XSS) attacks.

## Details

The gem does not validate input when parsing Textile links before returning it to users. This allows a remote attacker to inject scripts in a user's browser session within the trust relationship between their browser and the server.

## References
- http://co3k.org/blog/redcloth-unfixed-xss-en
- http://rubysec.com/advisories/CVE-2012-6684
- https://gist.github.com/co3k/75b3cb416c342aa1414c
