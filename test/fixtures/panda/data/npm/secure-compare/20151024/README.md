## Overview
[secure-compare](https://www.npmjs.com/package/secure-compare) is a node implementation of constant-time comparison algorithm to prevent timing attacks for Node.js.
The `compare` function made sure that the length of the two arguments is the same, and then mistakenly compared the first argument to itself, meaning that the function would return true for any two arguments of the same length.

## Recommendation
Update to version 3.0.1 or greater. When direct dependency update is not possible, use [`snyk wizard`](https://snyk.io/documentation/#wizard) to patch agains this vulnerability.


## References
- https://github.com/vdemedes/secure-compare/pull/1
