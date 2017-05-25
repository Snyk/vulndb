## Overview
[`org.apache.struts.xwork:xwork-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22xwork-core%22)
Affected versions of the package are vulnerable to Remote code Execution. The Apache Struts frameworks when forced, performs double evaluation of attributes' values assigned to certain tags so it is possible to pass in a value that will be evaluated again when a tag's attributes will be rendered.

## References
- [Apache Security Advisory](https://struts.apache.org/docs/s2-036.html)
