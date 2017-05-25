## Overview
[`org.picketlink:picketlink-tomcat-common`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22picketlink-tomcat-common%22)
The invokeNextValve function in identity/federation/bindings/tomcat/idp/AbstractIDPValve.java in PicketLink before 2.8.0.Beta1 does not properly check role based authorization, which allows remote authenticated users to gain access to restricted application resources via a (1) direct request or (2) request through an SP initiated flow.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-3158)