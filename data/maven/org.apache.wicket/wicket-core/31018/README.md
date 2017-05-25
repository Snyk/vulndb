## Overview
[`org.apache.wicket:wicket-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22wicket-core%22)
Affected versions of Apache Wicket provide a CSRF prevention measure that fails to discover some cross origin requests. The mitigation is to not only check the Origin HTTP header, but also take the Referer HTTP header into account when no Origin was provided. Furthermore, not all Wicket server side targets were subjected to the CSRF check. This was also fixed.

## References
- [Apache Security Advisory](https://wicket.apache.org/news/2016/11/08/cve-2016-6806.html)
