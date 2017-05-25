## Overview
[`io.netty:netty`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22netty%22) is a NIO client server framework which enables quick and easy development of network applications such as protocol servers and clients. It greatly simplifies and streamlines network programming such as TCP and UDP socket server.
Netty does not validate cookie name and value characters, allowing attackers to potentially bypass the `httpOnly` flag on sensitive cookies.

## References
- [Linkedin Security Blog](https://engineering.linkedin.com/security/look-netty_s-recent-security-update-cve--2015--2156)
- [Release Notes 3.9.8 and 3.10.3](http://netty.io/news/2015/05/08/3-9-8-Final-and-3.html)
- [Github PR 3.9.8 and 3.10.3](https://github.com/netty/netty/pull/3754)
- [Github Commit 3.9.8](https://github.com/netty/netty/commit/31815598a2af37f0b71ea94eada70d6659c23752)
- [Github Commit 3.10.3](https://github.com/netty/netty/commit/2caa38a2795fe1f1ae6ceda4d69e826ed7c55e55)
- [Release Notes 4.0.28](http://netty.io/news/2015/05/07/4-0-28-Final.html)
- [Github PR 4.0.28](https://github.com/netty/netty/pull/3748)
- [Github Commit 4.0.8](https://github.com/netty/netty/pull/3748/commits/4ac519f534493bb0ca7a77e1c779138a54faa7b9)
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=undefined)
