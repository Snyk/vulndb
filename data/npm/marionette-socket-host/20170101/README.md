## Overview
[`marionette-socket-host`](https://www.npmjs.com/package/marionette-socket-host) is a marionette-js-runner host for sending actions over a socket.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `marionette-socket-host`.
