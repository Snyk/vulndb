## Overview
[`com.opensymphony:xwork-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22xwork-core%22) is an command-pattern framework that is used to power WebWork as well as other applications. XWork provides an Inversion of Control container, a powerful expression language, data type conversion, validation, and pluggable configuration.

Multiple cross-site scripting (XSS) vulnerabilities in XWork in Apache Struts 2.x before 2.2.3, and OpenSymphony XWork in OpenSymphony WebWork, allow remote attackers to inject arbitrary web script or HTML via vectors involving (1) an action name, (2) the action attribute of an s:submit element, or (3) the method attribute of an s:submit element.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-1772)
- [Jira Issue](https://issues.apache.org/jira/browse/WW-3579)
- [Marian Ventuneac Blog](http://secureappdev.blogspot.co.il/2011/05/apache-struts-2-xwork-webwork-reflected.html)
