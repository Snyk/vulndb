## Overview

All versions of the static file server module nhouston are vulnerable to directory traversal. An attacker can provide input such as `../` to read files outside of the served directory.

_Source: [Node Security Project](https://nodesecurity.io/advisories/25)_

## Remediation

It is recommended that a different module be used, as Node Security Project have been unable to reach the maintainer of this module.

## References
- https://nodesecurity.io/advisories/25
- http://en.wikipedia.org/wiki/Directory_traversal_attack
