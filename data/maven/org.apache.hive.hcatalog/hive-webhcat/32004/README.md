## Overview
[`org.apache.hive.hcatalog:hive-webhcat`](https://hcatalog.hive.apache.org) the Apache Hive  data warehouse software facilitates reading, writing, and managing large datasets residing in distributed storage using SQL.

Affected versions of the package are vulnerable to ClickJacking. in the web UIs was missing   the X-Frame-Options header. An attacker could exploit this flaw and frame the pages to another website.

## Remediation
Upgrade `hive-webhcat` to version 3.0.0 (not yet published) or Higher.

## References
- [Apache Issue](https://issues.apache.org/jira/browse/HIVE-17679)
- [Github Commit](https://github.com/apache/hive/commit/2902c7cc2ab20525139cafa8c594a09fb6c499f9)
