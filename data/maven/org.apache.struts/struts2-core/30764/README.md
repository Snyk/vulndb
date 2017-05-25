## Overview
[`org.apache.struts:struts2-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22struts2-core%22)
Apache Struts 2.3.1.1 and earlier provides interfaces that do not properly restrict access to collections such as the session and request collections, which might allow remote attackers to modify run-time data values via a crafted parameter to an application that implements an affected interface, as demonstrated by the SessionAware, RequestAware, ApplicationAware, ServletRequestAware, ServletResponseAware, and ParameterAware interfaces.  NOTE: the vendor disputes the significance of this report because of an "easy work-around in existing apps by configuring the interceptor."

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-5057)