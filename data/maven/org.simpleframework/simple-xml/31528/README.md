## Overview
[`org.simpleframework:simple-xml`](http://simple.sourceforge.net/) is a RESTful Web API framework for Java.

Affected versions of the package are vulnerable to XML External Entity (XXE) Injection.

>The XML External Entity (XXE) vulnerabilities abuse the XML specification to force an XML parser to either fetch sensitive data from the system, or carry out denial of services (DoS) or server-side request forgery (SSRF) attacks. The main problem is that the XML standard allows an XML document to define entities, which are like variables that can refer to resources outside of the XML document. Let's consider the following XML document:
```xml
<?xml version="1.0" encoding="ISO-8859-1"?>
 <!DOCTYPE foo [
  <!ELEMENT foo ANY >
  <!ENTITY abc SYSTEM "file:///etc/passwd" >]>
<foo>&abc;</foo>
```

>This document defines an external entity named abc, that refers to the content of the file `/etc/passwd`. When the XML document is parsed, the entity `&abc;` will be replaced by the content of `/etc/passwd`. Now if an application is parsing XML data from an untrusted source, then by defining an external entity that points to a sensitive file, the attacker will be able to force the application to include sensitive data in the parsed XML document. If the attacker can then retrieve the content of the parsed document, they will be able to view the content of /etc/passwd.
- LGTM Blog


## Remediation
There is no fixed version for  `org.simpleframework:simple-xml`.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-1000190)
- [Restlet Security Advisory](https://github.com/restlet/restlet-framework-java/wiki/XEE-security-enhancements#vulnerability-cve-2017-14868)
- [Github Issue](https://github.com/ngallagher/simplexml/issues/18)
- [LGTM Security Blog](https://lgtm.com/blog/restlet_CVE-2017-14868)
