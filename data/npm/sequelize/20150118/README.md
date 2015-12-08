## Overview

SQL Injection is possible in an application using the npm module sequelize if untrusted user input is passed into the order parameter.

_Source: [Node Security Project](https://nodesecurity.io/advisories/33)_

## Details

**Example:**

```
Test.findAndCountAll({
where: { id :1 },
order : [['id', 'UNTRUSTED USER INPUT']]
})
```



## Remediation

Update to version 2.0.0-rc8 or greater.

## References
- https://nodesecurity.io/advisories/33
- https://github.com/sequelize/sequelize/issues/2906
