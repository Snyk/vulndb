## Overview
node-uuid prior to 1.4.4 contained a bug that caused it to consistently fall back to using `Math.random` instead of a more cryptographically sound source of entropy, the native `crypto` module.

## Recommendation
Upgrade to version 1.4.4 or greater

## References
- https://github.com/broofa/node-uuid/issues/108
- https://github.com/broofa/node-uuid/issues/122

