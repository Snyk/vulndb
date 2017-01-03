## Overview
[`scala-bin`](https://www.npmjs.com/package/scala-bin) is a binary wrapper for Scala.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `scala-bin`.

## References
- [Vulnerable Code](https://github.com/k-kinzal/scala-bin/blob/d1adabc323ebc63d704b0347f61ff686fbf6a923/src/common.js#L11)
