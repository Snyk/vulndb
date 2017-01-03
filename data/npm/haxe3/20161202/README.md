## Overview
[`haxe3`](https://www.npmjs.com/package/haxe3) is a Cross-Platform Toolkit (a fork from David Mouton's damoebius/haxe-npm)

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `haxe3`.

## References
- [Vulnerable Code](https://github.com/mebyz/haxe3/blob/master/bin/install.js#L21)
