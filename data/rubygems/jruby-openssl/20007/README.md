## Oerview
A security problem involving peer certificate verification was found where
failed verification silently did nothing, making affected applications
vulnerable to attackers. Attackers could lead a client application to believe
that a secure connection to a rogue SSL server is legitimate. Attackers could
also penetrate client-validated SSL server applications with a dummy
certificate.


## Remediation
Upgrade to version `>= 0.6` or greater.

## References
- http://rubysec.com/advisories/CVE-2009-4123
- http://jruby.org/2009/12/07/vulnerability-in-jruby-openssl
