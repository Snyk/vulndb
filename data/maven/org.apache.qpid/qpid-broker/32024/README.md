## Overview
[org.apache.qpid:qpid-broker](https://qpid.apache.org/) makes messaging tools that speak AMQP and support many languages and platforms.

In Apache Qpid Broker-J before 6.1.x before 6.1.5, the broker does not properly enforce a maximum frame size in AMQP 1.0 frames. A remote unauthenticated attacker could exploit this to cause the broker to exhaust all available memory and eventually terminate. Older AMQP protocols are not affected.

## References
- [Jira Issue](https://issues.apache.org/jira/browse/QPID-7947)
- [Jira Mailing list](https://lists.apache.org/thread.html/4054e1c90993f337eeea24a312841c0661653e673c0ff8e2cd9520fe@%3Cdev.qpid.apache.org%3E)
- [Apache Qpid Security Advisory](https://qpid.apache.org/cves/CVE-2017-15701.html)
