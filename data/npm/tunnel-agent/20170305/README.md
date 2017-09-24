## Overview
[`tunnel-agent`](https://www.npmjs.com/package/tunnel-agent) is HTTP proxy tunneling agent. Affected versions of the package are vulnerable to Uninitialized Memory Exposure. 

A possible memory disclosure vulnerability exists when a value of type `number` is used to set the _proxy.auth_ option of a request `request` and results in a possible uninitialized memory exposures in the request body.

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

`tunnel-agent`'s `request` construction uses the default `Buffer` constructor as-is, making it easy to append uninitialized memory to an existing list. If the value of the buffer list is exposed to users, it may expose raw server side memory, potentially holding secrets, private data and code. This is a similar vulnerability to the infamous [`Heartbleed`](http://heartbleed.com/) flaw in OpenSSL.

#### Proof of concept by ChALkeR
```js
require('request')({
  method: 'GET',
  uri: 'http://www.example.com',
  tunnel: true,
  proxy:{
      protocol: 'http:',
      host:"127.0.0.1",
      port:8080,
      auth:80
  }
});
```

You can read more about the insecure `Buffer` behavior [on our blog](https://snyk.io/blog/exploiting-buffer/).

Similar vulnerabilities were discovered in [request](https://snyk.io/vuln/npm:request:20160119), [mongoose](https://snyk.io/vuln/npm:mongoose:20160116), [ws](https://snyk.io/vuln/npm:ws:20160104) and [sequelize](https://snyk.io/vuln/npm:sequelize:20160115).

## Remediation
Upgrade `tunnel-agent` to version 0.6.0 or higher.

## References
- [PoC by ChALkeR](https://gist.github.com/ChALkeR/fd6b2c445834244e7d440a043f9d2ff4)
- [Github Commit](https://github.com/request/tunnel-agent/commit/9ca95ec7219daface8a6fc2674000653de0922c0)
