## Overview
[`ldap_fluff`](https://rubygems.org/gems/ldap_fluff) is a simple library for binding & group querying on top of various LDAP implementations.
Affected versions of the gem are vulnerable to authentication bypass. When using Microsoft Active Directory server as the authentication back-end, authentication is no longer being enforced, allowing a remote attacker to trivially bypass it.

## References
- http://rubysec.com/advisories/OSVDB-90579
- https://access.redhat.com/security/cve/cve-2012-5604
