## Overview
[`pouchDB`](https://www.npmjs.com/package/pouchdb) is an open-source JavaScript database inspired by `Apache CouchDB` that is designed to run well within the browser.

Vulnerable versions of the package had the `evalView` function in `pouchdb-core` to execute the view
function without a sandbox. The fix was introduced in version `6.0.5`, executing the view function in a sandbox and enforcing strict mode when running in Node.js.

The vulnerability was reported by [micaksica](https://github.com/micaksica).

## Remediation
Upgrade `pouchDB` to version 6.0.5 or later.

## References
- https://github.com/pouchdb/pouchdb/issues/5612
- https://github.com/pouchdb/pouchdb/compare/6.0.3...6.0.5
- https://medium.com/@micaksica/from-pouchdb-to-rce-a-node-js-injection-vector-ffd1d1dd2807
