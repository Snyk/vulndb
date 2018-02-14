## Overview
[`fastify`](https://www.npmjs.com/package/fastify) is a web framework, for Node.js.

Affected versions of the package are vulnerable to Denial of Service (DoS) attacks due to not limit the size of the payload before JSON parsing it.
An attacker can send a request with `Content-Type: application/json` and a very large payload, causing the Node.js process to crash with an `uncaughtException`.

## Remediation
Upgrade `fastify` to version 0.38.0 or higher.

## References
- [GitHub Release Notes](https://github.com/fastify/fastify/releases/tag/v0.38.0)
- [HackerOne Report](https://hackerone.com/reports/303632)
- [GitHub Commit](https://github.com/fastify/fastify/commit/fabd2a011f2ffbb877394abe699f549513ffbd76)
