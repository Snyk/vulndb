## Overview
[`sequelize`](https://www.npmjs.com/package/sequelize) is a multi dialect ORM for Node.JS/io.js.
Affected versions of the package are vulnerable to SQL Injection via the user search by typing the name they want to search for and the application then executes:
```js
User.findAll( { where: { name: req.body.name } } )
```
a malicious attacker may exploit this to find the users password by entering `$password$`. This could be avoided by specifying the exact column to search: the user column.

## Remediation
Upgrade `sequelize` to version 3.12.1 or higher.

## References
- [GitHub Issue](https://github.com/sequelize/sequelize/issues/4680)
- [GitHub Commit](https://github.com/sequelize/sequelize/commit/3f11bd97386f1cad4961d2cd054347508ef0aca5)
