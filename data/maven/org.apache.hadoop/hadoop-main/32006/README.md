## Overview
[`org.apache.hadoop:hadoop-main`](https://hadoop.apache.org) is a framework that allows for the distributed processing of large data sets across clusters of computers using simple programming models.

Affected versions of this package are vulnerable to Privilege escalation attacks.
In Apache Hadoop versions 2.6.1 to 2.6.5, 2.7.0 to 2.7.3, and 3.0.0-alpha1, if a file in an encryption zone with access permissions that make it world readable is localized via YARN's localization mechanism, that file will be stored in a world-readable location and can be shared freely with any application that requests to localize that file.

## References
- [Apache Hadoop Mailing List](https://lists.apache.org/thread.html/2e16689b44bdd1976b6368c143a4017fc7159d1f2d02a5d54fe9310f@%3Cgeneral.hadoop.apache.org%3E)
main
