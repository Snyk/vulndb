## Overview
`sequelize` versions prior to 2.0.0-rc7 are vulnerable to SQL Injection attacks if untrusted user input is passed into the `order` parameter.

## Remediation
Update to version 2.0.0-rc8 or greater.

## References
- https://nodesecurity.io/advisories/33
- https://github.com/sequelize/sequelize/issues/2906
