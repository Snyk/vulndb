## Overview
[`org.restlet.osgi:org.restlet`](https://osgi.restlet.org) is a RESTful Web API framework for Java
.
Affected versions of the package are vulnerable to XML External Entity (XXE) Injection due to bundling the vulnerable [`simple-xml`](SNYK-JAVA-ORGSIMPLEFRAMEWORK-31528) framework.

## Remediation
Upgrade `org.restlet.osgi:org.restlet` to version 2.3.11 or higher.

## References
- [LGTM Security Blog](https://lgtm.com/blog/restlet_CVE-2017-14868)
- [Restlet Security Advisory](https://github.com/restlet/restlet-framework-java/wiki/XEE-security-enhancements#vulnerability-cve-2017-14868)
- [Github PR](https://github.com/restlet/restlet-framework-java/pull/1287)
- [Github Issue](https://github.com/restlet/restlet-framework-java/issues/1286)
- [Github Commit](https://github.com/restlet/restlet-framework-java/commit/7c2636718c284598da0eed0839ef69bfccf48071)
