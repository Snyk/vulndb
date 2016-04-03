## Overview
Beginning with `sequelize` version 3.0.0, two security related changes were introduced:
- `findOne` no longer takes a string / integer / binary argument to represent a primaryKey. Use `findById` instead.
- `where: "raw query"` is no longer legal, you must now explicitly use `where: ["raw query", [replacements]]`

## Remediation
Update to version 3.0.0 or greater.

## References
- https://github.com/sequelize/sequelize/blob/master/changelog.md#300
