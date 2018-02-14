## Overview
[`xstream:xstream`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22xstream%22) through 1.4.9, when a certain denyTypes workaround is not used, mishandles attempts to create an instance of the primitive type 'void' during unmarshalling, leading to a remote application crash, as demonstrated by an `xstream.fromXML("&lt;void/>")` call.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-7957)
- [Vendor Advisory](http://x-stream.github.io/CVE-2017-7957.html)
