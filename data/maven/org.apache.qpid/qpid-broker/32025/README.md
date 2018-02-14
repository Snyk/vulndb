## Overview
[`org.apache.qpid:qpid-broker`](https://qpid.apache.org/) makes messaging tools that speak AMQP and support many languages and platforms.

In Apache Qpid Broker-J 0.18 through 0.32, if the broker is configured with different authentication providers on different ports one of which is an HTTP port, then the broker can be tricked by a remote unauthenticated attacker connecting to the HTTP port into using an authentication provider that was configured on a different port. The attacker still needs valid credentials with the authentication provider on the spoofed port. This becomes an issue when the spoofed port has weaker authentication protection (e.g., anonymous access, default accounts) and is normally protected by firewall rules or similar which can be circumvented by this vulnerability. AMQP ports are not affected. Versions 6.0.0 and newer are not affected.

## References
- [Jira Issue](https://issues.apache.org/jira/browse/QPID-8039)
- [Apache mailing list](https://lists.apache.org/thread.html/59d241e30db23b8b0af26bb273f789aa1f08515d3dc1a3868d3ba090@%3Cdev.qpid.apache.org%3E)
- [Apache Qpid Security Advisory](https://qpid.apache.org/cves/CVE-2017-15702.html)
