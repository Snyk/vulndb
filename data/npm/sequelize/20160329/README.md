## Overview
`sequelize` versions prior to 3.20.0 improperly escape arrays of strings bound to named parameters.

## Remediation
Update to version 3.20.0 or greater.

## References
- https://github.com/sequelize/sequelize/issues/5671
- https://github.com/sequelize/sequelize/commit/23952a2b020cc3571f090e67dae7feb084e1be71
