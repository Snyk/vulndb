## Overview
[`org.apache.struts:struts2-javatemplates-plugin`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22struts2-javatemplates-plugin%22)
Multiple cross-site scripting (XSS) vulnerabilities in component handlers in the javatemplates (aka Java Templates) plugin in Apache Struts 2.x before 2.2.3 allow remote attackers to inject arbitrary web script or HTML via an arbitrary parameter value to a .action URI, related to improper handling of value attributes in (1) FileHandler.java, (2) HiddenHandler.java, (3) PasswordHandler.java, (4) RadioHandler.java, (5) ResetHandler.java, (6) SelectHandler.java, (7) SubmitHandler.java, and (8) TextFieldHandler.java.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-2087)