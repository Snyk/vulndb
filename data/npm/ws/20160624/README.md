## Overview
The [`ws`](https://www.npmjs.com/package/ws) package does not limit the size of an incoming payload before it is processed by default. As a result, a very large payload (over 256MB in size) can lead to a failed allocation and crash the node process - enabling a [Denial of Service](https://en.wikipedia.org/wiki/Denial-of-service_attack) attack.

While 256MB may seem excessive, note that the attack is likely to be sent from another server, not an end-user computer, using data-center connection speeds. In those speeds, a payload of this size can be transmitted in seconds.

## Remediation
Update to version 1.1.1 or greater, which sets a default `maxPayload` of 100MB.
If you cannot upgrade, apply a Snyk patch, or provide `ws` with options setting the `maxPayload` to an appropriate size that is smaller than 256MB.

## References
- WS Issue: https://github.com/websockets/ws/commit/0328a8f49f004f98d2913016214e93b2fc2713bc
- Resulting crash in Node: https://github.com/nodejs/node/issues/7388


