## Overview
[`redis-store`](https://rubygems.org/gems/redis-store) is a namespaced Rack::Session, Rack::Cache, I18n and cache Redis stores for Ruby web frameworks.

Affected versions of the package are vulnerable to Deserialization of Untrusted Data.

# Details
Serialization is a process of converting an object into a sequence of bytes which can be persisted to a disk or database or can be sent through streams. The reverse process of creating object from sequence of bytes is called deserialization. Serialization is commonly used for communication (sharing objects between multiple hosts) and persistence (store the object state in a file or a database). It is an integral part of popular protocols like _Remote Method Invocation (RMI)_, _Java Management Extension (JMX)_, _Java Messaging System (JMS)_, _Action Message Format (AMF)_, _Java Server Faces (JSF) ViewState_, etc.

_Deserialization of untrusted data_ ([CWE-502](https://cwe.mitre.org/data/definitions/502.html)), is when the application deserializes untrusted data without sufficiently verifying that the resulting data will be valid, letting the attacker to control the state or the flow of the execution.

An attacker just needs to identify a piece of software that has both a vulnerable class on its path, and performs deserialization on untrusted data. Then all they need to do is send the payload into the deserializer, getting the command executed.

## Remediation
Upgrade `redis-store` to version 1.4.0 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-1000248)
- [GitHub PR](https://github.com/redis-store/redis-store/pull/290)
- [GitHub Issue](https://github.com/redis-store/redis-store/issues/289)
- [GitHub Commit](https://github.com/redis-store/redis-store/commit/e0c1398d54a9661c8c70267c3a925ba6b192142e)
