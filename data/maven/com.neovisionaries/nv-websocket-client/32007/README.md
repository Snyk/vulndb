## Overview
[`com.neovisionaries:nv-websocket-client `](https://github.com/TakahikoKawasaki/nv-websocket-client) is a WebSocket client implementation in Java.

Affected versions of this package are vulnerable to Man-in-the-Middle (MitM) attacks.
The Java WebSocket client nv-websocket-client does not verify that the server hostname matches a domain name in the subject's Common Name (CN) or subjectAltName field of the X.509 certificate, which allows man-in-the-middle attackers to spoof SSL/TLS servers via an arbitrary valid certificate.

## References
- [GitHub PR](https://github.com/TakahikoKawasaki/nv-websocket-client/pull/107)
- [GitHub Changelog](https://github.com/TakahikoKawasaki/nv-websocket-client/blob/master/CHANGES.md#21-2017-04-23)
- [GitHub Commit](https://github.com/TakahikoKawasaki/nv-websocket-client/pull/107/commits/feb9c8302757fd279f4cfc99cbcdfb6ee709402d)
