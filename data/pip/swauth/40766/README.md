## Overview
[`swauth`](http://pypi.python.org/pypi/swauth) is An alternative authentication system for Swift.

Affected versions of the package are vulnerable to Access Restriction Bypass.
An issue was discovered in middleware.py in OpenStack Swauth through 1.2.0 when used with OpenStack Swift through 2.15.1. The Swift object store and proxy server are saving (unhashed) tokens retrieved from the Swauth middleware authentication mechanism to a log file as part of a GET URI. This allows attackers to bypass authentication by inserting a token into an X-Auth-Token header of a new request.

## Remediation
The fix is merged to the master branch but not yet published.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-16613)
- [GitHub Commit](https://github.com/openstack/swauth/commit/70af7986265a3defea054c46efc82d0698917298)
