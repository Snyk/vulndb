## Overview
When CORS is enabled on a hapi route handler, it is possible to set a crumb token for a different domain. An attacker would need to have an application consumer visit a site they control, request a route supporting CORS, and then retrieve the token. With this token, they could possibly make requests to non CORS routes as this user.

A configuration and scenario where this would occur is unlikely, as most configurations will set CORS globally (where crumb is not used), or not at all.

_Source: [Node Security Project](https://nodesecurity.io/advisories/4)_

## Remediation
Update crumb to version 3.0.0 or greater.

## References
- https://github.com/spumko/crumb/commit/5e6d4f5c81677fe9e362837ffd4a02394303db3c
