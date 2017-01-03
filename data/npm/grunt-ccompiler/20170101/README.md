## Overview
[`grunt-ccompiler`](https://www.npmjs.com/package/grunt-ccompiler) is a Closure Compiler Grunt Plugin.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `grunt-ccompiler`.
