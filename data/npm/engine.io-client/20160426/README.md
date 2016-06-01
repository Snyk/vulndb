## Overview
[engine.io-client](https://www.npmjs.com/package/engine.io-client), the client for [engine.io](https://github.com/socketio/engine.io)  and [socket.io](https://github.com/socketio/socket.io), disables the core SSL/TLS verification checks by default. 

This allows an active attacker, for instance one operating a malicious WiFi, to intercept these encrypted connections using the attacker's spoofed certificate and keys. Doing so compromises the data communicated over this channel, as well as allowing an attacker to impersonate both the server and the client during the live session, sending spoofed data to either side.

## Remediation
Update to version 1.6.9 or greater.

If a direct dependency update is not possible, use [`snyk wizard`](https://snyk.io/docs#wizard) to patch this vulnerability.

## References
- https://www.cigital.com/blog/node-js-socket-io/
- https://github.com/socketio/engine.io-client/commit/2c55b278a491bf45313ecc0825cf800e2f7ff5c1
