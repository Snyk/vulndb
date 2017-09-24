## Overview
[`authbwc`](https://pypi.python.org/pypi/authbwc) is a user authentication and authorization component for the BlazeWeb framework.

Affected versions of this package are vulnerable to Privilege Escalation. It was possible for a user to gain the permissions of the user logged in previously due to the way the HTTP session user permissions were loaded.
A malicious user can log in after an admin has been logged in and not logged out, and gain their privileges.

## References
- [Bitbucket Commit](https://bitbucket.org/mlewellyn/authbwc/commits/d616e06f8a0c3ac888f4e72873c733350586ce47)
