## Overview
[`org.apache.hive.shims:hive-shims-common-secure`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22hive-shims-common-secure%22)
Apache Hive before 0.13.1, when in SQL standards based authorization mode, does not properly check the file permissions for (1) import and (2) export statements, which allows remote authenticated users to obtain sensitive information via a crafted URI.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-0228)