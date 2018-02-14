## Overview
[simplesamlphp/simplesamlphp](https://simplesamlphp.org/) is an application written in native PHP that deals with authentication. 

Affected versions of this package are vulnerable to Authentication Bypass due due to missing proper validation of user input, resulting in the execution of arbitrary authentication sources.

## Remediation
Upgrade `simplesamlphp/simplesamlphp` to version 1.14.14 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-12869)
- [SimpleSAMLphp Security Advisory](https://simplesamlphp.org/security/201704-02)
