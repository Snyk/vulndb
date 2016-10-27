## Oerview
The gollum gem contains a flaw in its upload file functionality that can
allow arbitrary file access. This occurs due to a lack of type checking
when handling temporary files during the upload process.


## Remediation
Upgrade to version `>= 4.0.1` or greater.

## References
- http://rubysec.com/advisories/CVE-2015-7314
- https://github.com/gollum/gollum/commit/ce68a88293ce3b18c261312392ad33a88bb69ea1
