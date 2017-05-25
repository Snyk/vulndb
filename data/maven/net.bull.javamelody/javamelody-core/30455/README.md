## Overview
[`net.bull.javamelody:javamelody-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22javamelody-core%22) monitors JavaEE applications.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks. There was no escaping of <script> blocks, allowing attackers to run arbitrary script in the `graphName` string.

## References
- [Github Release Notes](https://github.com/javamelody/javamelody/wiki/ReleaseNotes#1600)
- [Github Issue](https://github.com/javamelody/javamelody/issues/555)
- [Github Commit](https://github.com/javamelody/javamelody/commit/028a85ed599a3648b9fa91d35792dbf219da8a70)
