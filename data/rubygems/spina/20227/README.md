## Oerview
`Spina::ApplicationController` actions didn't have CSRF protection. This causes a CSRF vulnerability across the entire engine which includes administrative functionality such as creating users, changing passwords, and media management.

## Remediation
Upgrade to version `>= 0.6.29` or greater.

## References
- http://rubysec.com/advisories/CVE-2015-4619
- http://www.openwall.com/lists/oss-security/2015/06/16/11
