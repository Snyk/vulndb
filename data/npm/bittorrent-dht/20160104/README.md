## Overview
A memory disclosure vulnerability exists in `bittorrent-dht` module that would allow an attacker to send a specific series of messages to a listening peer to make it disclose internal memory of the node.js process.

## References
- https://github.com/feross/bittorrent-dht/issues/87