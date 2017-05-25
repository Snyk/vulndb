## Overview
[`org.apache.wicket:wicket-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22wicket-core%22)
Affected versions of the package are vulnerable to Information Exposure. By issuing requests to special urls handled by Wicket it is possible to check for the existence of particular classes in the classpath and thus check whether a third party library with a known security vulnerability is in use.

## References
- [Apache Security Advisory](https://wicket.apache.org/news/2014/02/21/cve-2014-0043.html)
