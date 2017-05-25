## Overview
[`org.apache.activemq:activemq-broker`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22activemq-broker%22)

The LDAPLoginModule implementation in the Java Authentication and Authorization Service (JAAS) in Apache ActiveMQ 5.x before 5.10.1 allows remote attackers to bypass authentication by logging in with an empty password and valid username, which triggers an unauthenticated bind.

**NOTE:** this identifier has been SPLIT per ADT2 due to different vulnerability types. See [CVE-2015-6524](https://snyk.io/vuln/SNYK-JAVA-ORGAPACHEACTIVEMQ-30477) for the use of wildcard operators in usernames.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-3612)
- [ActiveMQ Security Advisory](http://activemq.apache.org/security-advisories.data/CVE-2014-3612-announcement.txt)
- [OSS Security](http://seclists.org/oss-sec/2015/q1/427)
- [Jira Issue](https://issues.apache.org/jira/browse/AMQ-5345)
- [GitHub Commit](https://github.com/apache/activemq/commit/22f2f3dde757d31307da772d579815c1d169bc39)
