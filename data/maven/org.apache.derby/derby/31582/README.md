## Overview
[`org.apache.derby:derby`](https://derby.apache.org) is a pure Java, standards-based relational database engine.

Affected versions of the package are vulnerable to Arbitrary File Overwrite.
In Apache Derby 10.1.2.1, 10.2.2.0, 10.3.1.4, and 10.4.1.3, Export processing may allow an attacker to overwrite an existing file.

## Remediation
Upgrade `org.apache.derby:derby` to version 10.6.2.1 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2010-2232)
- [Apache Jira Issue](https://issues.apache.org/jira/browse/DERBY-2925)
- [Apache Derby Release Note](http://db.apache.org/derby/releases/release-10.6.2.1.html#Note+for+DERBY-2925)
