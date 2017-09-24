## Overview
[Apache Struts2](http://struts.apache.org/) is a popular open-source framework for developing web applications in the Java programming language.

The REST Plugin in affected versions use a `XStreamHandler` with an instance of XStream for deserialization without any type filtering. By design, there are few limits to the type of objects XStream can handle. This flexibility comes at a price. The XML generated or consumed by XStream includes all information required to build Java objects of almost any type. The provided XML data is used by XStream to unmarshal Java objects. An attacker could use this flaw to execute arbitrary code or conduct further attacks.

[A working exploit](https://github.com/rapid7/metasploit-framework/commit/5ea83fee5ee8c23ad95608b7e2022db5b48340ef) is publicly available and [is actively](https://www.imperva.com/blog/2017/09/cve-2017-9805-analysis-of-apache-struts-rce-vulnerability-in-rest-plugin/) exploited in the wild.

You can read more about this vulnerability [on our blog](https://snyk.io/blog/equifax-breach-vulnerable-open-source-libraries/).

# Details
Serialization is a process of converting an object into a sequence of bytes which can be persisted to a disk or database or can be sent through streams. The reverse process of creating object from sequence of bytes is called deserialization. Serialization is commonly used for communication (sharing objects between multiple hosts) and persistence (store the object state in a file or a database). It is an integral part of popular protocols like _Remote Method Invocation (RMI)_, _Java Management Extension (JMX)_, _Java Messaging System (JMS)_, _Action Message Format (AMF)_, _Java Server Faces (JSF) ViewState_, etc.

_Deserialization of untrusted data_ ([CWE-502](https://cwe.mitre.org/data/definitions/502.html)), is when the application deserializes untrusted data without sufficiently verifying that the resulting data will be valid, letting the attacker control the state or the flow of the execution. 

Java deserialization issues have been known for years. However, interest in the issue intensified greatly in 2015, when classes that could be abused to achieve remote code execution were found in a [popular library (Apache Commons Collection)](https://snyk.io/vuln/SNYK-JAVA-COMMONSCOLLECTIONS-30078). These classes were used in zero-days affecting IBM WebSphere, Oracle WebLogic and many other products.

An attacker just needs to identify a piece of software that has both a vulnerable class on its path, and performs deserialization on untrusted data. Then all they need to do is send the payload into the deserializer, getting the command executed.

> Developers put too much trust in Java Object Serialization. Some even de-serialize objects pre-authentication. When deserializing an Object in Java you typically cast it to an expected type, and therefore Java's strict type system will ensure you only get valid object trees. Unfortunately, by the time the type checking happens, platform code has already created and executed significant logic. So, before the final type is checked a lot of code is executed from the readObject() methods of various objects, all of which is out of the developer's control. By combining the readObject() methods of various classes which are available on the classpath of the vulnerable application an attacker can execute functions (including calling Runtime.exec() to execute local OS commands).
- Apache Blog


## Remediation
Developers are strongly advised to upgrade their _Apache Struts_ components to version `2.3.34`, `2.5.13` or higher.

It is possible that some REST actions stop working because of applied default restrictions on available classes. In this case please investigate the new interfaces that were introduced to allow class restrictions per action, those interfaces are:
* org.apache.struts2.rest.handler.AllowedClasses
* org.apache.struts2.rest.handler.AllowedClassNames
* org.apache.struts2.rest.handler.XStreamPermissionProvider

If for some reason upgrading is not an option, consider the following workarounds:
1. Disable handling XML pages and requests to such pages
```xml
<constant name="struts.action.extension" value="xhtml,,json" />
```

2. Override getContentType in XStreamHandler
```java
 public class MyXStreamHandler extends XStreamHandler { 
   public String getContentType() {
     return "not-existing-content-type-@;/&%$#@";
   }
 }
```

3. Register the handler by overriding the one provided by the framework in your struts.xml
```xml
<bean type="org.apache.struts2.rest.handler.ContentTypeHandler" name="myXStreamHandmer" class="com.company.MyXStreamHandler"/>
<constant name="struts.rest.handlerOverride.xml" value="myXStreamHandler"/>
```

## References
- [LGTM Advisory](https://lgtm.com/blog/apache_struts_CVE-2017-9805_announcement)
- [LGTM Vulnerability Details](https://lgtm.com/blog/apache_struts_CVE-2017-9805)
- [Apache Struts Statement on Equifax Security Breach](https://blogs.apache.org/foundation/entry/apache-struts-statement-on-equifax)
- [Apache Security Bulletin](https://cwiki.apache.org/confluence/display/WW/S2-052)
