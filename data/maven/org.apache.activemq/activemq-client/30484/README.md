## Overview
[`org.apache.activemq:activemq-client`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22activemq-client%22)
Apache ActiveMQ 5.x before 5.13.0 does not restrict the classes that can be serialized in the broker, which allows remote attackers to execute arbitrary code via a crafted serialized Java Message Service (JMS) ObjectMessage object.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-5254)