## Oerview
Fat Free CRM Gem contains a javascript cross-site scripting (XSS)
vulnerability. When a user is created/updated using a specifically
crafted username, first name or last name, it is possible for
arbitrary javascript to be executed on all Fat Free CRM pages.
This code would be executed for all logged in users.


## Remediation
Upgrade to version `>= 0.13.3` or greater.

## References
- http://rubysec.com/advisories/OSVDB-110420
- http://osvdb.org/show/osvdb/110420
