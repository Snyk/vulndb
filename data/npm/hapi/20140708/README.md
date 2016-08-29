## Overview

Versions 2.0.x and 2.1.x have a file descriptor leak that when triggered repeatedly will cause the server to run out of file descriptors and the node process to die. The effort required to take down a server depends on the process file descriptor limit. No other side effects or exploits have been identified.

_Source: [Node Security Project](https://nodesecurity.io/advisories/11)_

## Details

**Impact:**

This vulnerability allows an attacker to take down a hapi-based server running versions 2.0.x and 2.1.x.
This does NOT affect hapi 1.x deployments.

## Remediation

Please upgrade to version 2.2.x or above as soon as possible.

## References
- https://github.com/spumko/hapi/issues/1427
