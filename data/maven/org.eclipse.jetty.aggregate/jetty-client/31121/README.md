## Overview
[`org.eclipse.jetty.aggregate:jetty-client`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22jetty-client%22)
Jetty 8.1.0.RC2 and earlier computes hash values for form parameters without restricting the ability to trigger hash collisions predictably, which allows remote attackers to cause a denial of service (CPU consumption) by sending many crafted parameters.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-4461)