## Overview
[`org.apache.hive.hcatalog:hive-hcatalog-core`](https://hcatalog.hive.apache.org) the Apache Hive data warehouse software facilitates reading, writing, and managing large datasets residing in distributed storage using SQL.

Affected versions of the package are vulnerable to Information Disclosure.
Apache Hive 2.1.x before 2.1.2, 2.2.x before 2.2.1, and 2.3.x before 2.3.1 expose an interface through which masking policies can be defined on tables or views, e.g., using Apache Ranger. When a view is created over a given table, the policy enforcement does not happen correctly on the table for masked columns.

## Remediation
Upgrade `org.apache.hive.hcatalog:hive-hcatalog-core` to version 2.3.1 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-12625)
- [Apache mail-archive](http://mail-archives.apache.org/mod_mbox/hive-user/201710.mbox/%3C3791103E-80D5-4E75-AF23-6F8ED54DDEBE%40apache.org%3E)
