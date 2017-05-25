## Overview
[`org.apache.wicket:wicket`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22wicket%22)
Affected versions of the package are vulnerable to Cross-site Scripting (XSS). It is possible for JavaScript statements to break out of a `<script>` tag in the rendered response. This might pose a security threat if the written JavaScript contains user provided data.

## References
- [Apache Security Advisory](https://wicket.apache.org/news/2013/03/03/cve-2012-5636.html)
