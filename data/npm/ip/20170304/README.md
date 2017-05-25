## Overview
[`ip`](https://www.npmjs.com/package/ip) is an IP address utility for node.js
Affected versions of the package are vulnerable to Uninitialized Memory Exposure due to an insecure use of the Node.js Buffer class.

## Details
The Buffer class in Node.js is a mutable array of binary data, and can be initialized with a string, array or number.
```js
const buf1 = new Buffer([1,2,3]);
// creates a buffer containing [01, 02, 03]
const buf2 = new Buffer('test');
// creates a buffer containing ASCII bytes [74, 65, 73, 74]
const buf3 = new Buffer(10);
// creates a buffer of length 10
```

The first two variants simply create a binary representation of the value it received. The last one, however, pre-allocates a buffer of the specified size, making it a useful buffer, especially when reading data from a stream.
When using the number constructor of Buffer, it will allocate the memory, but will not fill it with zeros. Instead, the allocated buffer will hold whatever was in memory at the time. If the buffer is not `zeroed` by using `buf.fill(0)`, it may leak sensitive information like keys, source code, and system info.

For more information on the Buffer vulnerability, go to our [blog](https://snyk.io/blog/exploiting-buffer/).

## Remediation
Upgrade `ip` to version 1.1.5 or higher.

## References
- [GitHub Commit](https://github.com/indutny/node-ip/commit/b2b4469255a624619bda71e52fd1f05dc0dd621f)
