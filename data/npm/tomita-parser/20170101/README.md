## Overview
[`tomita-parser`](https://www.npmjs.com/package/tomita-parser) is a Node wrapper for Yandex Tomita Parser.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `tomita-parser`.

## References
- [Vulnerable Code](https://github.com/ArtiomShapovalov/tomita-parser/blob/6ce865e9290905d9533a5ea7dfab277f69e7a023/gulpfile.js#L11)
