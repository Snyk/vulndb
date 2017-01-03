## Overview
[`scalajs-standalone-bin`](https://www.npmjs.com/package/scalajs-standalone-bin) is a Binary wrapper for ScalaJS.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `scala-standalone-bin`.

## References
- [Vulnerable Code](https://github.com/k-kinzal/scalajs-standalone-bin/blob/0298772d1e1cad8bfabd56ec901dc385f0805a6d/src/common.js#L12)
