## Overview
[`org.apache.xmlrpc:xmlrpc`](https://ws.apache.org/xmlrpc/) is a Java implementation of XML-RPC, a popular protocol that uses XML over HTTP to implement remote procedure calls.

Affected versions of the package are vulnerable to Deserialization of Untrusted Data. By default `ws-xmlrpc` supports `java.io.Serializable` data types through `<ex:serializable>` element. An attacker can leverage this to call a method and pass a serialized Java object in that element. `ws-xmlrpc` will deserialize the malicious object without validation.

## Details
Serialization is a process of converting an object into a sequence of bytes which can be persisted to a disk or database or can be sent through streams. The reverse process of creating object from sequence of bytes is called deserialization. Serialization is commonly used for communication (sharing objects between multiple hosts) and persistence (store the object state in a file or a database). It is an integral part of popular protocols like _Remote Method Invocation (RMI)_, _Java Management Extension (JMX)_, _Java Messaging System (JMS)_, _Action Message Format (AMF)_, _Java Server Faces (JSF) ViewState_, etc.

_Deserialization of untrusted data_ ([CWE-502](https://cwe.mitre.org/data/definitions/502.html)), is when the application deserializes untrusted data without sufficiently verifying that the resulting data will be valid, letting the attacker to control the state or the flow of the execution.

Java deserialization issues have been known for years. However, interest in the issue intensified greatly in 2015, when classes that could be abused to achieve remote code execution were found in a [popular library (Apache Commons Collection)](https://snyk.io/vuln/SNYK-JAVA-COMMONSCOLLECTIONS-30078). These classes were used in zero-days affecting IBM WebSphere, Oracle WebLogic and many other products.

An attacker just needs to identify a piece of software that has both a vulnerable class on its path, and performs deserialization on untrusted data. Then all they need to do is send the payload into the deserializer, getting the command executed.

> Developers put too much trust in Java Object Serialization. Some even de-serialize objects pre-authentication. When deserializing an Object in Java you typically cast it to an expected type, and therefore Java's strict type system will ensure you only get valid object trees. Unfortunately, by the time the type checking happens, platform code has already created and executed significant logic. So, before the final type is checked a lot of code is executed from the readObject() methods of various objects, all of which is out of the developer's control. By combining the readObject() methods of various classes which are available on the classpath of the vulnerable application an attacker can execute functions (including calling Runtime.exec() to execute local OS commands).
- Apache Blog

The vulnerability, also know as _Mad Gadget_
> Mad Gadget is one of the most pernicious vulnerabilities we’ve seen. By merely existing on the Java classpath, seven “gadget” classes in Apache Commons Collections (versions 3.0, 3.1, 3.2, 3.2.1, and 4.0) make object deserialization for the entire JVM process Turing complete with an exec function. Since many business applications use object deserialization to send messages across the network, it would be like hiring a bank teller who was trained to hand over all the money in the vault if asked to do so politely, and then entrusting that teller with the key. The only thing that would keep a bank safe in such a circumstance is that most people wouldn’t consider asking such a question.
- Google


## References
- [OSS Security](http://seclists.org/oss-sec/2016/q3/48)
- [0ang3el Blog](https://0ang3el.blogspot.co.il/2016/07/beware-of-ws-xmlrpc-library-in-your.html)
