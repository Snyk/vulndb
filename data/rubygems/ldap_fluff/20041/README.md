## Oerview
Red Hat Subscription Asset Manager contains a flaw in the rubygem-ldap_fluff component. The issue is triggered when using Microsoft Active Directory server as the authentication back-end. This may result in authentication no longer being enforced, allowing a remote attacker to trivially bypass it.

## Remediation
Upgrade to version `>= 0.1.3` or greater.

## References
- http://rubysec.com/advisories/OSVDB-90579
- http://osvdb.org/show/osvdb/90579
