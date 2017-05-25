## Overview
[`activemq:activemq`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22activemq%22) is an open source message broker and JMS 1.1 provider.
Apache ActiveMQ before 5.6.0 allows remote attackers to cause a denial of service (file-descriptor exhaustion and broker crash or hang) by sending many openwire failover:tcp:// connection requests.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-4905)
- [OSS Security](http://openwall.com/lists/oss-security/2011/12/25/2)
- [Jira Issue](https://issues.apache.org/jira/browse/AMQ-3294)
- [Github Commit #1](https://github.com/apache/activemq/commit/9df9d3e89140b7329654ad5675259ec6f0c4b3a7)
- [Github Commit #2](https://github.com/apache/activemq/commit/3a71f8e33d0309cb0ca5b5758a8f251da205e757)
