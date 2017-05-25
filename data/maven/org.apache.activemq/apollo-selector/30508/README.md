## Overview
[`org.apache.activemq:apollo-selector`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22apollo-selector%22)
Affected versions of the package are vulnerable to XML External Entity (XXE) Injection. It is possible for a consumer dequeuing XML message(s) to specify an XPath based selector thus causing the broker to evaluate the expression and attempt to match it against the messages in the queue while also performing an XML external entity resolution.


## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-3579)
- [Activemq Security Advisory](http://activemq.apache.org/security-advisories.data/CVE-2014-3579-announcement.txt)
