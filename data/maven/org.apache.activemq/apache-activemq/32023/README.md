## Overview
Affected versions of [org.apache.activemq:apache-activemq](https://activemq.apache.org/) are vulnerable to Information Exposure.

The Jetty ResourceHandler in Apache ActiveMQ 5.x before 5.3.2 and 5.4.x before 5.4.0 allows remote attackers to read JSP source code via a // (slash slash) initial substring in a URI for (1) admin/index.jsp, (2) admin/queues.jsp, or (3) admin/topics.jsp.

## References
- [Apache Jira](https://issues.apache.org/jira/browse/AMQ-2700)
