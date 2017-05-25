## Overview
[`org.apache.activemq:activemq-all`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22activemq-all%22) puts together an ActiveMQ jar bundle.

The LDAPLoginModule implementation in the Java Authentication and Authorization Service (JAAS) in Apache ActiveMQ 5.x before 5.10.1 allows wildcard operators in usernames, which allows remote attackers to obtain credentials via a brute force attack.

**NOTE:** this identifier was SPLIT from [CVE-2014-3612](https://snyk.io/vuln/SNYK-JAVA-ORGAPACHEACTIVEMQ-30476) per ADT2 due to different vulnerability types.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-6524)
- [ActiveMQ Security Advisory](http://activemq.apache.org/security-advisories.data/CVE-2014-3612-announcement.txt)
- [Jira Issue](https://issues.apache.org/jira/browse/AMQ-5345)
- [Github Commit](https://github.com/apache/activemq/commit/22f2f3dde757d31307da772d579815c1d169bc39)
