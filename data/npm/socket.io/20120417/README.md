## Overview
[`socket.io`](https://www.npmjs.com/package/socket.io) is a node.js realtime framework server.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) due to insufficient user input validation in the `jsonp-polling` function. Attackers may exploit this by injecting arbitrary script into the browser.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `socket.io` to version 0.9.6 or higher.

## References
- [Github Changelog](https://github.com/socketio/socket.io/blob/master/History.md#096--2012-04-17)
- [Github Issue](https://github.com/socketio/socket.io/issues/925)
- [Github Commit](https://github.com/socketio/socket.io/commit/e98fc7bc865640e777c26dbb1040f33ff103aa78)
