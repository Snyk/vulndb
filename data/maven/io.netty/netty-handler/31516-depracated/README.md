## Overview
[`io.netty:netty`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22netty%22) is a NIO client server framework which enables quick and easy development of network applications such as protocol servers and clients.

Affected version of this package did not properly ensure that the certificate is actually associated with that host.

## Remediation
Upgrade `netty` to versions `4.0.29` or higher.

## References
- [Github Issue](https://github.com/netty/netty/issues/3784)
- [Github PR](https://github.com/netty/netty/pull/3794)
- [Github Commit](https://github.com/netty/netty/commit/ac6a76ea1b68fd461c2819ca731b979e6f5ff4a6)
