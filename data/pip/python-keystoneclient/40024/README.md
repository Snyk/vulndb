## Overview
[`python-keystoneclient`](https://pypi.python.org/pypi/python-keystoneclient) is a Client Library for OpenStack Identity
The auth_token middleware in the OpenStack Python client library for Keystone (aka python-keystoneclient) before 0.7.0 does not properly retrieve user tokens from memcache, which allows remote authenticated users to gain privileges in opportunistic circumstances via a large number of requests, related to an "interaction between eventlet and python-memcached."

## Remediation
Upgrade to version `0.7.0` or greater.

## References
- [Openwall](http://www.openwall.com/lists/oss-security/2014/03/27/4)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2014-0105)
