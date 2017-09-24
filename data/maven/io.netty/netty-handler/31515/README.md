## Overview
[`io.netty:netty`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22netty%22) is a NIO client server framework which enables quick and easy development of network applications such as protocol servers and clients.

Affected version of this package did not properly ensure that the certificate is actually associated with that host.

## Remediation
Upgrade `netty` to versions `4.0.45`, `4.1.9` or higher.

## References
- [Github Commit](https://github.com/netty/netty/commit/d8e6fbb9c3656663f41797a15f38bb25fdcab834)
