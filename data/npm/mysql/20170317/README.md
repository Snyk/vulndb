## Overview
[`mysql`](https://www.npmjs.com/package/mysql) is a node.js driver for mysql.

Affected versions of the package are vulnerable due to the unsafe use of the `Buffer()` method. Uninitialized memory may be exposed when a value of type `number` is provided to various methods in `mysql` which require allocation of buffers and results in concatenation of uninitialized memory to the buffer collection.

This vulnerability is unlikely to be exploited, but may be possible if a server-side `mysql` accepts typed input for passwords from the client even though the user doesn’t control the server-side code (i.e through JSON format).

## Details
Constructing a `Buffer` class with integer `N` creates a `Buffer` of length `N` with raw (not "zero-ed") memory.

In the following example, the first call would allocate 100 bytes of memory, while the second example will allocate the memory needed for the string "100":

```js
// uninitialized Buffer of length 100
x = new Buffer(100);
// initialized Buffer with value of '100'
x = new Buffer('100');
```

You can read more about the insecure `Buffer` behavior [on our blog](https://snyk.io/blog/exploiting-buffer/).

Similar vulnerabilities were discovered in [request](https://snyk.io/vuln/npm:request:20160119), [mongoose](https://snyk.io/vuln/npm:mongoose:20160116), [ws](https://snyk.io/vuln/npm:ws:20160104) and [sequelize](https://snyk.io/vuln/npm:sequelize:20160115).

## Remediation
Upgrade `mysql` to version 2.14.0 or higher.

## References
- [Github Commit](https://github.com/mysqljs/mysql/commit/310c6a7d1b2e14b63b572dbfbfa10128f20c6d52)
