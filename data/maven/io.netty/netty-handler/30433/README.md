## Overview
[`io.netty:netty-handler`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22netty-handler%22)
Affected versions of this package are vulnerable to infinite loop Denial of Service (DoS) attacks via a flaw in Netty's OpenSslEngine handling of renegotiation.

**Note:** Netty is only vulnerable if renegotiation is enabled (It is a default setting).

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-4970)
- [GitHub PR](https://github.com/netty/netty/pull/5364)
- [Release Notes 4.0.37](http://netty.io/news/2016/06/07/4-0-37-Final.html)
- [GitHub Commit 4.0](https://github.com/netty/netty/commit/524156f164a910b8b0978d27a2c700a19cd8048f)
- [Release Notes 4.1.1](http://netty.io/news/2016/06/07/4-1-1-Final.html)
- [GitHub Commit 4.1](https://github.com/netty/netty/commit/9e2c400f89c5badc39919f811179d3d42ac5257c)
