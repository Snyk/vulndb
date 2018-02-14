## Overview
 [`libp2p-secio`] provides a SECIO implementation in JavaScript.

Affected versions of the package are vulnerable to Identity Spoofing.
It did not correctly vaidate the that the `DstPeer` `PeerId` matched the `PeerId` that the peer learns through the Crypto Handshake 

## References
- [GitHub PR](https://github.com/libp2p/js-libp2p-secio/pull/95)
- [GitHub Commit](https://github.com/libp2p/js-libp2p-secio/pull/95/commits/dc439b5c7ef6e36d68c39e865efc0c7db61acacc)
