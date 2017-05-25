## Overview
[`net.bull.javamelody:javamelody-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22javamelody-core%22) monitors JavaEE applications.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks. Alert messages in `writeMessageIfNotNull` function were not HTML encoded.

## References
- [Github Release Notes](https://github.com/javamelody/javamelody/wiki/ReleaseNotes#1610)
- [Github Commit](https://github.com/javamelody/javamelody/commit/e0497c1980acebd257d3da78dfde29ae9bdffdf6)
