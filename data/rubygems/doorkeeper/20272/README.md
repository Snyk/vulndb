## Overview
[`doorkeeper`](https://rubygems.org/gems/doorkeeper) is an Oauth 2.0 provider for Rails and Grape.

Affected versions incorrectly implement Oauth 2.0 Token Revocation (RFC 7009). Specifically, public clients making an unauthenticated calls to revoke a token would not have their tokens revoked. In addition, a compromised confidential client can be used to revoke tokens of other users.

## References
- http://rubysec.com/advisories/CVE-2016-6582
- http://www.openwall.com/lists/oss-security/2016/08/19/2
