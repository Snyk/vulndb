## Overview
[`org.apache.activemq:artemis-jms-client`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22artemis-jms-client%22)
The getObject method of the javax.jms.ObjectMessage class in the (1) JMS Core client, (2) Artemis broker, and (3) Artemis REST component in Apache ActiveMQ Artemis before 1.4.0 might allow remote authenticated users with permission to send messages to the Artemis broker to deserialize arbitrary objects and execute arbitrary code by leveraging gadget classes being present on the Artemis classpath.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-4978)