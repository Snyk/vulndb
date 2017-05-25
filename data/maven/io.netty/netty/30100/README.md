## Overview
[`io.netty:netty`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22netty%22)
The SslHandler in Netty before 3.9.2 allows remote attackers to cause a denial of service (infinite loop and CPU consumption) via a crafted SSLv2Hello message.

## References

- [Redhat Bugzilla](https://bugzilla.redhat.com/CVE-2014-3488)
- [GitHub Issue](https://github.com/netty/netty/issues/2562)
- [Netty release notes](http://netty.io/news/2014/06/11/3-9-2-Final.html)
