## Overview
A vulnerability exists in bassmaster <= 1.5.1 that allows for an attacker to provide arbitrary JavaScript that is then executed server side via eval.

_Source: [Node Security Project](https://nodesecurity.io/advisories/1)_

## Remediation
Update to bassmaster version 1.5.2 or greater.

## References
- https://www.npmjs.org/package/bassmaster
- https://github.com/hapijs/bassmaster/commit/b751602d8cb7194ee62a61e085069679525138c4
- https://nodesecurity.io/advisories/1
