## Overview
`sequelize` versions prior to 3.17.0 are vulnerable to SQL Injection attack if untrusted user input is passed into the order or limit parameters.

## Example
```
models.User.findAll({
  limit: '1; DELETE FROM "Users" WHERE 1=1; --',
}).then(function (users) {
  console.log(users);
});
```

## Remediation
Update to version 3.17.0 or greater.

## References
- https://github.com/sequelize/sequelize/pull/5167
- https://github.com/sequelize/sequelize/blob/master/changelog.md#3170
- https://github.com/sequelize/sequelize/commit/d198d78182cbf1ea3ef1706740b35813a6aa0838
