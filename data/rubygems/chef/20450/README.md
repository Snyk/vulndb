## Overview
[`chef`](https://rubygems.org/gems/chef) is a systems integration framework, built to bring the benefits of configuration management to your entire infrastructure.

Affected versions of the package are vulnerable to Information Disclosure.
The knife bootstrap command in chef leaks the validator.pem private RSA key to /var/log/messages.

## Remediation
There is no fix version for `chef`.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2015-8559)
- [Github Issue #1](https://github.com/chef/chef/issues/3871)
- [Github Issue #2](https://github.com/chef/chef/issues/3920)
