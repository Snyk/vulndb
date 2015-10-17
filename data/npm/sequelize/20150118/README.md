## Overview:

SQL Injection is possible in an application using the npm module sequelize if untrusted user input is passed into the order parameter.


Example:
```
Test.findAndCountAll({
where: { id :1 },
order : [['id', 'UNTRUSTED USER INPUT']]
})
```

_Original description taken from the [Node Security Project](https://nodesecurity.io/)_

## Recommendations:

Update to version 2.0.0-rc8 or greater.

## References:
- https://github.com/sequelize/sequelize/issues/2906
