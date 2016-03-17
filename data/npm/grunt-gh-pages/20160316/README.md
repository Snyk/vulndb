## Overview
[`grunt-gh-pages`](https://www.npmjs.com/package/grunt-gh-pages) writes the repository url to log without redacting the github authentication token. The token can be compromised if the logs become publicly available.  

## Remediation
Upgrade to version 1.0.0 or greater and consider revoking previously used credentials with the module.

## References
- https://github.com/tschaub/grunt-gh-pages/pull/41
- https://github.com/tschaub/grunt-gh-pages/commit/590f69767203d8c379fe18cded93bd5ad6cb53cb


