## Overview
[`concat-stream`](https://www.npmjs.com/package/concat-stream) is writable stream that concatenates strings or binary data and calls a callback with the result.
Affected versions of the package are vulnerable to Uninitialized Memory Exposure.

A possible memory disclosure vulnerability exists when a value of type `number` is provided to the `stringConcat()` method and results in concatination of uninitialized memory to the stream collection.

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

`concat-stream`'s `stringConcat` function uses the default `Buffer` constructor as-is, making it easy to append uninitialized memory to an existing list. If the value of the buffer list is exposed to users, it may expose raw server side memory, potentially holding secrets, private data and code. This is a similar vulnerability to the infamous [`Heartbleed`](http://heartbleed.com/) flaw in OpenSSL.

You can read more about the insecure `Buffer` behavior [on our blog](https://snyk.io/blog/exploiting-buffer/).

Similar vulnerabilities were discovered in [request](https://snyk.io/vuln/npm:request:20160119), [mongoose](https://snyk.io/vuln/npm:mongoose:20160116), [ws](https://snyk.io/vuln/npm:ws:20160104) and [sequelize](https://snyk.io/vuln/npm:sequelize:20160115).

## Remediation
Upgrade `concat-stream` to version 1.5.2 or higher.

## References
- [Github PR](https://github.com/maxogden/concat-stream/pull/47)
- [Github Commit](https://github.com/maxogden/concat-stream/pull/47/commits/3e285ba5e5b10b7c98552217f5c1023829efe69e)
