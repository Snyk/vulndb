## Overview
Invalid email addresses can be mistakenly matched during sign-in. This affects the `User` record to be fetched from the DB. Correct password for that `User` is still required to authenticate.

## Recommendations
Upgrade to version 0.3.16 or greater. 

If a direct dependency update is not possible, use [`snyk wizard`](https://snyk.io/documentation/#wizard) to patch this vulnerability.

## References
- https://nodesecurity.io/advisories/60
- https://www.npmjs.com/package/keystone
