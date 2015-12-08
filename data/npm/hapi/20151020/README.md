## Overview
Hapi v11.0.0 and below have an incorrect implementation of the CORS protocol, and allow for configurations that, at best, return inconsistent headers and, at worst, cross-origin activities that are expected to be forbidden.

## Details
If the connection has CORS enabled but one route has it off, and the route is not GET, the OPTIONS prefetch request will return the default CORS headers and then the actual request will go through and return no CORS headers. This defeats the purpose of turning CORS on the route.

## Remediation
Upgrade to a version 11.0.0 or greater.

## References
- https://nodesecurity.io/advisories/45
- https://github.com/hapijs/hapi/issues/2850
- https://github.com/hapijs/hapi/issues/2840
