## Overview
[`io.spray:spray-httpx`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22spray-httpx%22) is a suite of lightweight Scala libraries for building and consuming RESTful web services on top of Akka.

Affected versions of this package are vulnerable to XXE attacks as a result of insecure defaults.

For more information on Insecure Defaults and how they can affect you, see our [blog](https://snyk.io/blog/mongodb-hack-and-secure-defaults/).

## References
- [GitHub PR](https://github.com/spray/spray/pull/1024)
- [GitHub Commit](https://github.com/spray/spray/commit/01f42fd7b320489fb5455b71b373fffb7046cb7d)
