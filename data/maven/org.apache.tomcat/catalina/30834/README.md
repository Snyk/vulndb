## Overview
[`org.apache.tomcat:catalina`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22catalina%22)
Apache Tomcat before 5.5.35, 6.x before 6.0.35, and 7.x before 7.0.23 computes hash values for form parameters without restricting the ability to trigger hash collisions predictably, which allows remote attackers to cause a denial of service (CPU consumption) by sending many crafted parameters.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-4858)