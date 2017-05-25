## Overview
[`org.apache.activemq:apache-activemq`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22apache-activemq%22)
Affected versions of the package are vulnerable to XML External Entity (XXE) Injection. It is possible for a consumer dequeuing XML message(s) to specify an XPath based selector thus causing the broker to evaluate the expression and attempt to match it against the messages in the queue while also performing an XML external entity resolution.

## References
- [Activemq Security Advisory](http://activemq.apache.org/security-advisories.data/CVE-2014-3600-announcement.txt?version=2&modificationDate=1423051306000&api=v2)
