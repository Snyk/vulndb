## Overview
[`org.apache.hadoop:hadoop-common`](https://hadoop.apache.org) is a framework that allows for the distributed processing of large data sets across clusters of computers using simple programming models.

Affected versions of the package are vulnerable to Information Exposure. The `YARN NodeManager` component can leak the password for credential store provider used by the NodeManager to YARN Applications. This is due to an incomplete fix for [CVE-2016-3086](https://snyk.io/vuln/SNYK-JAVA-ORGAPACHEHADOOP-30627)

## Remediation 
Upgrade `org.apache.hadoop:hadoop-common` to version 2.7.5 or higher

## References
- [Apache Mailing List](https://lists.apache.org/thread.html/773c93c2d8a6a52bbe97610c2b1c2ad205b970e1b8c04fb5b2fccad6@%3Cgeneral.hadoop.apache.org%3E)
