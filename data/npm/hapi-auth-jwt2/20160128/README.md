## Overview
Authentication bypass issues exist in `hapi-auth-jwt2` version 5.1.1, when `try` authentication mode is used, `request.auth.isAuthenticated` will be set to `true` for unauthenticated users.

## Remediation
Upgrade to version 5.1.2 or greater.

## References
- https://github.com/dwyl/hapi-auth-jwt2/issues/111
- https://github.com/dwyl/hapi-auth-jwt2/pull/112
- https://nodesecurity.io/advisories/81
