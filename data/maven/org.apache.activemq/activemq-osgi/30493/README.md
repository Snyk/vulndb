## Overview
[`org.apache.activemq:activemq-osgi`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22activemq-osgi%22)
Race condition in hawtjni-runtime/src/main/java/org/fusesource/hawtjni/runtime/Library.java in HawtJNI before 1.8, when a custom library path is not specified, allows local users to execute arbitrary Java code by overwriting a temporary JAR file with a predictable name in /tmp.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-2035)