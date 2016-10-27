## Oerview
Fat Free CRM contains a flaw as the application is missing the protect_from_forgery
statement, therefore HTTP requests to app/controllers/application_controller.rb
do not require multiple steps, explicit confirmation, or a unique token when
performing certain sensitive actions. By tricking a user into following a specially
crafted link, a context-dependent attacker can perform a Cross-Site Request Forgery
(CSRF / XSRF) attack causing the victim to perform unspecified actions.


## Remediation
Upgrade to version `>= 0.13.0` or greater.

## References
- http://rubysec.com/advisories/OSVDB-101446
- http://osvdb.org/show/osvdb/101446
