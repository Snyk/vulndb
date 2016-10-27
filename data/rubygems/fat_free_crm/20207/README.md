## Oerview
Fat Free CRM contains a flaw as HTTP requests to /admin/users do not require
multiple steps, explicit confirmation, or a unique token when performing
certain sensitive actions. By tricking a user into following a specially
crafted link, a context-dependent attacker can perform a Cross-Site Request
Forgery (CSRF / XSRF) attack causing the victim to creating administrative
users.


## Remediation
Upgrade to version `>= 0.13.6` or greater.

## References
- http://rubysec.com/advisories/OSVDB-118465
- http://osvdb.org/show/osvdb/118465
