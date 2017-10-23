## Overview
[`org.restlet.osgi:org.restlet`](https://osgi.restlet.org) is a RESTful Web API framework for Java.

Affected versions of the package are vulnerable to XML External Entity (XXE) Injection.
Restlet Framework 2.1.x before 2.1.7 and 2.x.x before 2.2 RC1, when using `XMLRepresentation` or XML serializers, allows attackers to cause a denial of service via an XML Entity Expansion (XEE) attack.

## Remediation
Upgrade `org.restlet.osgi:org.restlet` to version 2.3.11 or higher.

## References
- [Restlet Security Advisory](https://github.com/restlet/restlet-framework-java/wiki/XEE-security-enhancements#vulnerability-cve-2014-1868)
