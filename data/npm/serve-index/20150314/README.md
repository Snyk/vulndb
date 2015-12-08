## Overview

When using serve-index middleware version < 1.6.3 file and directory names are not escaped in HTML output. If remote users can influence file or directory names, this can trigger a persistent XSS attack.

_Source: [Node Security Project](https://nodesecurity.io/advisories/34)_

## Remediation

Upgrade to version 1.6.3 or greater

## References
- https://nodesecurity.io/advisories/34
- https://github.com/expressjs/serve-index/issues/28
- https://www.owasp.org/index.php/Cross-site_Scripting_%28XSS%29
