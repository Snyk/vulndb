## Overview
[`com.rabbitmq.jms:rabbitmq-jms`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22rabbitmq-jms%22)
ObjectMessages in JMS can be used to transfer arbitrary Java objects which are then deserialized before or at the time of being passed on to message listeners. This opens message consumers up to a range of attacks that exploit issues in Java object serialization.
**Note:** An attacker must authenticate with RabbitMQ in order to carry out the attack.

# Details
Serialization is a process of converting an object into a sequence of bytes which can be persisted to a disk or database or can be sent through streams. The reverse process of creating object from sequence of bytes is called deserialization. Serialization is commonly used for communication (sharing objects between multiple hosts) and persistence (store the object state in a file or a database). It is an integral part of popular protocols like _Remote Method Invocation (RMI)_, _Java Management Extension (JMX)_, _Java Messaging System (JMS)_, _Action Message Format (AMF)_, _Java Server Faces (JSF) ViewState_, etc.

_Deserialization of untrusted data_ ([CWE-502](https://cwe.mitre.org/data/definitions/502.html)), is when the application deserializes untrusted data without sufficiently verifying that the resulting data will be valid, letting the attacker to control the state or the flow of the execution. 

Java deserialization issues have been known for years. However, interest in the issue intensified greatly in 2015, when classes that could be abused to achieve remote code execution were found in a [popular library (Apache Commons Collection)](https://snyk.io/vuln/SNYK-JAVA-COMMONSCOLLECTIONS-30078). These classes were used in zero-days affecting IBM WebSphere, Oracle WebLogic and many other products.

An attacker just needs to identify a piece of software that has both a vulnerable class on its path, and performs deserialization on untrusted data. Then all they need to do is send the payload into the deserializer, getting the command executed.

> Developers put too much trust in Java Object Serialization. Some even de-serialize objects pre-authentication. When deserializing an Object in Java you typically cast it to an expected type, and therefore Java's strict type system will ensure you only get valid object trees. Unfortunately, by the time the type checking happens, platform code has already created and executed significant logic. So, before the final type is checked a lot of code is executed from the readObject() methods of various objects, all of which is out of the developer's control. By combining the readObject() methods of various classes which are available on the classpath of the vulnerable application an attacker can execute functions (including calling Runtime.exec() to execute local OS commands).
- Apache Blog

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-6194)
- [GitHub Issue](https://github.com/rabbitmq/rabbitmq-jms-client/issues/3)
- [GitHub Issue](https://github.com/rabbitmq/rabbitmq-jms-client/pull/4)
- [GitHub Commit](https://github.com/rabbitmq/rabbitmq-jms-client/commit/95ae7401c0f007d5c8e6618ab009c171ce633916)
