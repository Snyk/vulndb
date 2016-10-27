## Oerview
Spree contains a flaw that leads to unauthorized privileges being gained. The
issue is triggered as certain input related to mass role assignment in
app/models/spree/user.rb is not properly verified before being used to update
a user. This may allow a remote attacker to assign arbitrary roles and gain
elevated administrative privileges.


## Remediation
Upgrade to version `~> 1.1.6` or greater.

## References
- http://rubysec.com/advisories/OSVDB-90865
- https://spreecommerce.com/blog/multiple-security-vulnerabilities-fixed
