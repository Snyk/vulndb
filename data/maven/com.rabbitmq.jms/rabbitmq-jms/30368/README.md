## Overview
[`com.rabbitmq.jms:rabbitmq-jms`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22rabbitmq-jms%22)
ObjectMessages in JMS can be used to transfer arbitrary Java objects which are then deserialized before or at the time of being passed on to message listeners. This opens message consumers up to a range of attacks that exploit issues in Java object serialization.
**Note:** An attacker must authenticate with RabbitMQ in order to carry out the attack.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-6194)
- [GitHub Issue](https://github.com/rabbitmq/rabbitmq-jms-client/issues/3)
- [GitHub Issue](https://github.com/rabbitmq/rabbitmq-jms-client/pull/4)
- [GitHub Commit](https://github.com/rabbitmq/rabbitmq-jms-client/commit/95ae7401c0f007d5c8e6618ab009c171ce633916)
