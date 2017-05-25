## Overview
[`org.springframework.amqp:spring-amqp`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22spring-amqp%22)
Affected versions of the package are vulnerable to Remote Code Execution Through Deserialization of Unsafe Objects.
The class org.springframework.core.serializer.DefaultDeserializer does not validate the deserialized object against a whitelist. By supplying a crafted serialized object like Chris Frohoff's Commons Collection gadget, remote code execution can be achieved.

## References
- [Pivotal Security Advisory](https://pivotal.io/security/cve-2016-2173)
