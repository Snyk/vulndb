## Overview
[org.apache.hadoop:hadoop-mapreduce](http://hadoop.apache.org/) is a framework for job scheduling and cluster resource management.

Affected versions of this package are vulnerable to Information Exposure.
A cluster user may be able to expose private files owned by the user running the MapReduce job history server process.
A malicious user can construct a configuration file containing XML directives that reference sensitive files on the MapReduce job history server host.

## Remediation
Upgrade `org.apache.hadoop:hadoop-mapreduce` to versions 2.8.3, 3.0.0 or higher.

## References
- [Apache Mail Archives](https://lists.apache.org/thread.html/a790a251ace7213bde9f69777dedb453b1a01a6d18289c14a61d4f91@%3Cgeneral.hadoop.apache.org%3E)
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-15713)
