## Overview
[`pouchdb`](https://www.npmjs.com/package/pouchdb) is PouchDB is a pocket-sized database.
Affected versions of the package are vulnerable to SQL Injection due to not properly escaping the startkey/endkey in the allDocs() function.
You can read more about `SQL Injection` on our [blog](https://snyk.io/blog/sql-injection-orm-vulnerabilities/).

## Remediation
Upgrade `pouchdb` to version 1.1.0 or higher.


## References
- [Github Issue](https://github.com/pouchdb/pouchdb/issues/1170)
- [Github Commit](https://github.com/pouchdb/pouchdb/commit/59b1f9e003b9858796bbbe7f5f476b3cba527c26)
