## Overview
[`github.com/go-ldap/ldap`](github.com/go-ldap/ldap) is a basic LDAP v3 functionality for the GO programming language.

Affected versions of the package are vulnerable to Access Restriction Bypass.

In the ldap.v2 (aka go-ldap) package through 2.5.0 for Go, an attacker may be able to login with an empty password. This issue affects an application using this package if these conditions are met: (1) it relies only on the return error of the Bind function call to determine whether a user is authorized (i.e., a nil return value is interpreted as successful authorization) and (2) it is used with an LDAP server allowing unauthenticated bind.

## Remediation
Upgrade to commit `95ede12` from Aug 24, 2017 or newer.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-14623)
- [Github PR](https://github.com/go-ldap/ldap/pull/126)
- [Github Commit](https://github.com/go-ldap/ldap/commit/95ede1266b237bf8e9aa5dce0b3250e51bfefe66)
