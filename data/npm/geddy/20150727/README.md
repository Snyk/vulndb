## Overview

Geddy static file serving allows directory traversal with a URI encoded path.

_Source: [Node Security Project](https://nodesecurity.io/advisories/10)_

## Details
**Example:**

```
http://localhost:4000/..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2fetc/passwd

geddy is serving the output as it doesn't match the routes and it's a static file
```

## Remediation

Update to version >= 13.0.8

## References
- https://nodesecurity.io/advisories/10
- https://github.com/geddy/geddy/issues/697
- https://github.com/geddy/geddy/pull/699
