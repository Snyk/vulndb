## Overview
The [gm](https://www.npmjs.com/package/gm) package is the GraphicsMagick and ImageMagick wrapper for Node.js.
The `compare()` function allows comparing of two images, taking as an input argument the path to both images. The function, in versions prior to 1.21.1, fails to sanitize the input correctly, making it vulnerable to a command injection attack.

## Remediation
Upgrade `gm` to version 1.21.1 or greater. 

If a direct dependency update is not possible, use [`snyk wizard`](https://snyk.io/documentation/#wizard) to patch this vulnerability.

## References
- https://nodesecurity.io/advisories/54
- https://www.owasp.org/index.php/Command_Injection
- https://github.com/aheckmann/gm/commit/5f5c77490aa84ed313405c88905eb4566135be31
