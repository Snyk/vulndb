## Overview
[`webrtc-native`](https://www.npmjs.com/package/webrtc-native) uses WebRTC from chromium project.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `webrtc-native`.

## References
- [Vulnerable Code](https://github.com/vmolsa/webrtc-native/blob/master/scripts/install.js#L10)
