## Overview
[`knex`](https://www.npmjs.com/package/knex) is a batteries-included SQL query & schema builder for Postgres, MySQL and SQLite3 and the Browser.

Column names are not properly escaped in the postgreSQL dialect. This may allow attackers to craft a query to the host DB and access private information.
Writing the following code:
```js
var query = knex.select('id","name').from('test')
console.log(query.toSQL())
```
Has the following result:
```
{ method: 'select',
  options: undefined,
  bindings: [],
  sql: 'select "id","name" from "test"' }
```

## Remediation
Upgrade `knex` to versions `0.6.23`, `0.7.6` or higher.


## References
- [Github Issue](https://github.com/tgriesser/knex/issues/737)
- [Github Commit](https://github.com/tgriesser/knex/commit/13995d6936208fe0a968b9ae0f46a2f19faacffc)
