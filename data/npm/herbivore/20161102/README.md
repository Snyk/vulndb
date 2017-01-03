## Overview
[`herbivore`](https://www.npmjs.com/package/herbivore) is a packet sniffing and crafting library. Built on libtins.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
Update to a version higher than `0.0.3` 

## References
- [Github Commit](https://github.com/samatt/Herbivore/commit/0a041defc3463e99948e5d2064aef54b2128c5a3)
