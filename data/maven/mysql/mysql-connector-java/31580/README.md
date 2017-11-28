## Overview
[`mysql:mysql-connector-java`](https://mysql) provides connectivity for client applications developed in the Java programming language with MySQL Connector/J, a driver that implements the Java Database Connectivity (JDBC) API.

Affected versions of the package are vulnerable to Arbitrary Code Execution.
Vulnerability in the MySQL Connectors component of Oracle MySQL (subcomponent: Connector/J). Supported versions that are affected are 5.1.41 and earlier. Easily "exploitable" vulnerability allows low privileged attacker with network access via multiple protocols to compromise MySQL Connectors. While the vulnerability is in MySQL Connectors, attacks may significantly impact additional products. Successful attacks of this vulnerability can result in unauthorized update, insert or delete access to some of MySQL Connectors accessible data as well as unauthorized read access to a subset of MySQL Connectors accessible data.

## Remediation
Upgrade `mysql:mysql-connector-java` to version 5.1.42 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-3586)
- [Securityfocus](http://www.securityfocus.com/bid/97982)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1444759)
