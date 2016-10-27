## Oerview
Safemode is initialised with an optional 'delegate' object.
If the delegated object is a Rails controller, 'inspect' could
be called which then exposes all informations about the App,
including routes, secret tokens, caches and so on.


## Remediation
Upgrade to version `>= 1.2.4` or greater.

## References
- http://rubysec.com/advisories/CVE-2016-3693
- http://seclists.org/oss-sec/2016/q2/119
