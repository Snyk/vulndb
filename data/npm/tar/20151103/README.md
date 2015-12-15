## Overview
The [`tar`](https://www.npmjs.com/package/tar) module prior to version 2.0.0 does not properly normalize symbolic links pointing to targets outside the extraction root. As a result, packages may hold symbolic links to parent and sibling directories and overwrite those files when the package is extracted.

## Remediation
Upgrade to version 2.0.0 or greater. 
If a direct dependency update is not possible, use [`snyk wizard`](https://snyk.io/documentation/#wizard) to patch this vulnerability.

## References
- https://nodesecurity.io/advisories/57
- https://github.com/npm/node-tar/commit/a5337a6cd58a2d800fc03b3781a25751cf459f28
- https://github.com/npm/npm/releases/tag/v2.7.5
