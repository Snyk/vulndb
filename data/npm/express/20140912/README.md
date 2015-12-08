## Overview
Vulnerable versions of express do not specify a charset field in the content-type header while displaying 400 level response messages. The lack of enforcing the user's browser to set correct charset could be leveraged by an attacker to perform a cross-site scripting attack, using non-standard encodings like UTF-7.

_Source: [Node Security Project](https://nodesecurity.io/advisories/8)_

## Recommendations
Update express to a patched version.

## References
- https://nodesecurity.io/advisories/8
