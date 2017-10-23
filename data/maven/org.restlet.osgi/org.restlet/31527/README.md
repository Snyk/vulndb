## Overview
[`org.restlet.osgi:org.restlet`](https://osgi.restlet.org) is a RESTful Web API framework for Java.

Affected versions of the package are vulnerable to XML External Entity (XXE) Injection. Multiple classes used the `expandingEntityRefs` attribute, originally introduced when handling [CVE-2014-1868](SNYK-JAVA-ORGRESTLETOSGI-31525). The attribute was set to `false`, which did not properly prevent the expansion of external entities.

## Remediation
Upgrade `org.restlet.osgi:org.restlet` to version 2.3.12 or higher.

## References
- [Restlet Security Advisory](https://github.com/restlet/restlet-framework-java/wiki/XEE-security-enhancements#vulnerability-cve-2017-14949)
- [Github Commit](https://github.com/restlet/restlet-framework-java/commit/fe75aff3af23b879b984db7a2b6824cee0ef0fc5)
