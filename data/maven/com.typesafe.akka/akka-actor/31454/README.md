## Overview
[`com.typesafe.akka:akka-actor`](https://index.scala-lang.org/akka/akka/akka-actor) is message-driven application builder on the JVM.

Affected versions of the package are vulnerable to Arbitrary Code Execution.
An attacker that can connect to an `ActorSystem` exposed via Akka Remote over TCP can gain remote code execution capabilities in the context of the JVM process that runs the ActorSystem if:
- JavaSerializer is enabled (default in Akka 2.4.x)
 * and TLS is disabled or TLS is enabled with akka.remote.netty.ssl.security.require-mutual-authentication = false (which is still the default in Akka 2.4.x)
 * or if TLS is enabled with mutual authentication and the authentication keys of a host that is allowed to connect have been compromised, an attacker gained access to a valid certificate (e.g. by compromising a node with certificates issued by the same internal PKI tree to get access of the certificate)
- regardless of whether untrusted mode is enabled or not

Java deserialization is [known to be vulnerable](http://doc.akka.io/docs/akka/2.4/security/2017-02-10-java-serialization.html) to attacks when attacker can provide arbitrary types.


## Remediation
Upgrade `akka-actor` to version 2.4.17 or higher.

## References
- [Github Vulnerability Advisory](https://github.com/akka/akka/blob/bfdde013e1174914cdb4aa27d33f8797a58973dd/akka-docs/src/main/paradox/scala/security/2017-02-10-java-serialization.md)
- [Java Deserialization Vulnerability](http://doc.akka.io/docs/akka/2.4/security/2017-02-10-java-serialization.html)
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-1000034)
