## Overview
[`react-native-baidu-voice-synthesizer`](https://www.npmjs.com/package/react-native-baidu-voice-synthesizer) is a baidu voice speech synthesizer for react native.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `react-native-baidu-voice-synthesizer`.

## References
- [Vulnerable Code](https://github.com/react-melon/react-native-baidu-voice-synthesizer/blob/72bb361fc9d4885b723727f8613ef5a915293907/scripts/install-sdk.js#L6)
