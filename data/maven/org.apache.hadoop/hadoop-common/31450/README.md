## Overview
[`org.apache.hadoop:hadoop-common`](https://hadoop.apache.org) is a framework that allows for the distributed processing of large data sets across clusters of computers using simple programming models.

In Apache Hadoop 2.8.0, 3.0.0-alpha1, and 3.0.0-alpha2, the LinuxContainerExecutor runs docker commands as root with insufficient input validation. When the docker feature is enabled, authenticated users can run commands as root.

## References
- [CVE](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-7669)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1448373)
- [OSS Security](http://seclists.org/oss-sec/2017/q2/394)
- [GitHub OR](https://github.com/apache/hadoop/pull/126)
