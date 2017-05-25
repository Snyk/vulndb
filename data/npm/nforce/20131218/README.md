## Overview
[`nforce`](https://www.npmjs.com/package/nforce) is a REST API wrapper for force.com, database.com, and salesforce.com.
Affected versions of the package leak the `client_secret` variable.

## Remediation
Upgrade `nforce` to version 0.6.1 or higher.

## References
- [Github PR](https://github.com/kevinohara80/nforce/pull/33)
- [Github Issue](https://github.com/kevinohara80/nforce/issues/32)
- [Github Commit](https://github.com/kevinohara80/nforce/pull/33/commits/584ebd7ebb795dca9849f8f85ce0d2778c431aa3)
