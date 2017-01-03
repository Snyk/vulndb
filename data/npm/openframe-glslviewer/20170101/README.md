## Overview
[`openframe-glslviewer`](https://www.npmjs.com/package/openframe-glslviewer) is a Openframe extension which adds support for shaders via glslViewer.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `openframe-glslviewer`.

## References
- [Vulnerable Code](https://github.com/OpenframeProject/Openframe-glslViewer/blob/master/install.sh#L43)
