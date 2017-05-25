## Overview
[`geronimo:geronimo-tomcat`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22geronimo-tomcat%22) is a Geronimo Tomcat integration.
Apache Geronimo 2.2.1 and earlier computes hash values for form parameters without restricting the ability to trigger hash collisions predictably, which allows remote attackers to cause a denial of service (CPU consumption) by sending many crafted parameters.  NOTE: this might overlap CVE-2011-4461.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-5034)
- [HashCollision DoS POC](https://github.com/FireFart/HashCollision-DOS-POC/blob/master/HashtablePOC.py)
- [Jira Issue](https://issues.apache.org/jira/browse/GERONIMO-6253)
