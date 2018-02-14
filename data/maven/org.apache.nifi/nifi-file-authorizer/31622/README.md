## Overview
[Apache NiFi](https://nifi.apache.org/) is a system to process and distribute data.
 
Affected versions of this package are vulnerable to Deserialization of Untrusted Data.

Any authenticated user (valid client certificate but without ACL permissions) could upload a template which contained malicious code and caused a denial of service via Java deserialization attack. The fix to properly handle Java deserialization was applied on the Apache NiFi 1.4.0 release. Users running a prior 1.x release should upgrade to the appropriate release.

## Details
Serialization is a process of converting an object into a sequence of bytes which can be persisted to a disk or database or can be sent through streams. The reverse process of creating object from sequence of bytes is called deserialization. Serialization is commonly used for communication (sharing objects between multiple hosts) and persistence (store the object state in a file or a database). It is an integral part of popular protocols like _Remote Method Invocation (RMI)_, _Java Management Extension (JMX)_, _Java Messaging System (JMS)_, _Action Message Format (AMF)_, _Java Server Faces (JSF) ViewState_, etc.

_Deserialization of untrusted data_ ([CWE-502](https://cwe.mitre.org/data/definitions/502.html)), is when the application deserializes untrusted data without sufficiently verifying that the resulting data will be valid, letting the attacker to control the state or the flow of the execution.

Java deserialization issues have been known for years. However, interest in the issue intensified greatly in 2015, when classes that could be abused to achieve remote code execution were found in a [popular library (Apache Commons Collection)](https://snyk.io/vuln/SNYK-JAVA-COMMONSCOLLECTIONS-30078). These classes were used in zero-days affecting IBM WebSphere, Oracle WebLogic and many other products.

An attacker just needs to identify a piece of software that has both a vulnerable class on its path, and performs deserialization on untrusted data. Then all they need to do is send the payload into the deserializer, getting the command executed.

> Developers put too much trust in Java Object Serialization. Some even de-serialize objects pre-authentication. When deserializing an Object in Java you typically cast it to an expected type, and therefore Java's strict type system will ensure you only get valid object trees. Unfortunately, by the time the type checking happens, platform code has already created and executed significant logic. So, before the final type is checked a lot of code is executed from the readObject() methods of various objects, all of which is out of the developer's control. By combining the readObject() methods of various classes which are available on the classpath of the vulnerable application an attacker can execute functions (including calling Runtime.exec() to execute local OS commands).
- Apache Blog

## Remediation
Upgrade `Apache NiFi` to 1.4.0 version or higher.

## References
- [NiFi Security Advisory](https://nifi.apache.org/security.html#CVE-2017-15703)
- [GitHub Commit](https://github.com/apache/nifi/pull/2134/commits/91ff58d038d3afe6a6c1aa13226a2c3050612938)
- [Jira Issue](https://issues.apache.org/jira/browse/NIFI-4357)
