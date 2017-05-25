## Overview
[`floody`](https://www.npmjs.com/package/floody) combines floods of small stream writes while not delaying or buffering writes when not flooded.

A possible memory disclosure vulnerability exists when a value of type `number` is provided to the `write()` method and results in the concatination of uninitialized memory to the buffer collection.

This is a result of unobstructed use of the `Buffer` constructor, whose [insecure default constructor increases the odds of memory leakage](https://snyk.io/blog/exploiting-buffer/).

## Details
Constructing a `Buffer` class with integer `N` creates a `Buffer` of length `N` with raw (not "zero-ed") memory.

In the following example, the first call would allocate 100 bytes of memory, while the second example will allocate the memory needed for the string "100":
```js
// uninitialized Buffer of length 100
x = new Buffer(100);
// initialized Buffer with value of '100'
x = new Buffer('100');
```

`floody` uses the default `Buffer` constructor as-is, making it easy to append uninitialized memory to an existing list. If the value of the buffer list is exposed to users, it may expose raw server side memory, potentially holding secrets, private data and code. This is a similar vulnerability to the infamous [`Heartbleed`](http://heartbleed.com/) flaw in OpenSSL.

**PoC by ChALKeR:**
```js
var f = require('floody')(process.stdout); f.write(1000); f.stop()
```

You can read more about the insecure `Buffer` behavior [on our blog](https://snyk.io/blog/exploiting-buffer/).

Similar vulnerabilities were discovered in [request](https://snyk.io/vuln/npm:request:20160119), [mongoose](https://snyk.io/vuln/npm:mongoose:20160116), [ws](https://snyk.io/vuln/npm:ws:20160104) and [sequelize](https://snyk.io/vuln/npm:sequelize:20160115).

## Remediation
Upgrade `floody` to version 0.1.1 or higher.

## References
[Github Commit](https://github.com/soldair/node-floody/commit/6c44722312131f4ac8a1af40f0f861c85efe01b0)
