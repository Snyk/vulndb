## Overview
[bl](https://www.npmjs.com/package/bl) is a storage object for collections of Node Buffers.

A possible memory disclosure vulnerability exists when a value of type `number` is provided to the `append()` method and results in concatination of uninitialized memory to the buffer collection. 

This is a result of unobstructed use of the `Buffer` constructor, who's [insecure default constructor increases the odds of memory leakage](https://snyk.io/blog/exploiting-buffer/).

## Details
Constructing a `Buffer` class with integer `N` creates a `Buffer` of length `N` with raw (not "zero-ed") memory.

In the following example, the first call would allocate 100 bytes of memory, while the second example will allocate the memory needed for the string "100":
```js
// uninitialized Buffer of length 100
x = new Buffer(100); 
// initialized Buffer with value of '100'
x = new Buffer('100'); 
```

`bl`'s `append` function uses the default `Buffer` constructor as-is, making it easy to append uninitialized memory to an existing list. If the value of the buffer list is exposed to users, it may expose raw server side memory, potentially holding secrets, private data and code. This is a similar vulnerability to the infamous [`Heartbleed`](http://heartbleed.com/) flaw in OpenSSL.

```js
const BufferList = require('bl')

var bl = new BufferList()
bl.append(new Buffer('abcd'))
bl.append(new Buffer('efg'))
bl.append('100')
// appends a Buffer holding 100 bytes of uninitialized memory
bl.append(100)                     
bl.append(new Buffer('j'))
```

You can read more about the insecure `Buffer` behavior [on our blog](https://snyk.io/blog/exploiting-buffer/).

Similar vulnerabilities were discovered in [request](https://snyk.io/vuln/npm:request:20160119), [mongoose](https://snyk.io/vuln/npm:mongoose:20160116), [ws](https://snyk.io/vuln/npm:ws:20160104) and [sequelize](https://snyk.io/vuln/npm:sequelize:20160115).

## References
- https://github.com/rvagg/bl/pull/22
- https://github.com/rvagg/bl/compare/v1.0.0...v1.0.1
- https://snyk.io/blog/exploiting-buffer/
