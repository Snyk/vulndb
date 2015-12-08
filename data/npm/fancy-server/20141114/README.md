## Overview

Versions less than 0.1.4 of the static file server module fancy-server are vulnerable to directory traversal. An attacker can provide input such as `../` to read files outside of the served directory.

_Source: [Node Security Project](https://nodesecurity.io/advisories/9)_

## Remediation

Upgrade to version 0.1.4 or greater.

## References
- https://nodesecurity.io/advisories/9
- http://en.wikipedia.org/wiki/Directory_traversal_attack
