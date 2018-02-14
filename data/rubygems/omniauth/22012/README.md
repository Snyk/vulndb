## Overview
[Omniauth](https://github.com/omniauth/omniauth) is a library that standardizes multi-provider authentication for web applications.

Affected versions of this package are vulnerable to Information Exposure.
the authenticity_token value is improperly protected because POST (in addition to GET) parameters are stored in the session and become available in the environment of the callback phase.

## Remediation
Upgrade Omniauth to version 1.3.2 or higher.

## References
- [GitHub Pull Request](https://github.com/omniauth/omniauth/pull/867)
- [GitHub Commit](https://github.com/omniauth/omniauth/pull/867/commits/71866c5264122e196847a3980c43051446a03e9b)
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-18076)
