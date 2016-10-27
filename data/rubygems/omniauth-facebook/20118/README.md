## Overview

[`omniauth-facebook`](https://rubygems.org/gems/omniauth-facebook) is a Facebook OAuth2 Strategy for OmniAuth.

omniauth-facebook Gem for Ruby contains a flaw that may allow a remote attacker to bypass authentication and authenticate as another user.

## Details

This version of omniauth-facebook supports passing of the access token via the URL. This may allow a remote attacker to bypass authentication and authenticate as another user.

## References
- http://rubysec.com/advisories/OSVDB-99888
- https://github.com/mkdynamic/omniauth-facebook/wiki/Access-token-vulnerability:-CVE-2013-4593
