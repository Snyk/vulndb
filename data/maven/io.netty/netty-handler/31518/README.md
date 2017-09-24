## Overview
[`io.netty:netty`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22netty%22) is a NIO client server framework which enables quick and easy development of network applications such as protocol servers and clients.

Affected versions of this package are vulnerable to Man-in-the-Middle (MitM) attacks. The SSLv3 protocol uses nondeterministic CBC padding, which makes it easier for Man-in-the-Middle (MitM) attackers to obtain cleartext data via a padding-oracle attack. This is also known as the POODLE vulnerability.

## Remediation
Upgrade `netty` to versions `3.9.6` or higher.

## References
- [Github Issue](https://github.com/netty/netty/issues/3031)
- [Github Commit](https://github.com/netty/netty/commit/a1af35313cc8414109e7a411bb2401ae31046289)
