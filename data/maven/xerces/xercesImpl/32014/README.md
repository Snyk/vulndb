## Overview
[`xerces:xercesImpl`](http://xerces.apache.org/) is the next generation of high performance, fully compliant XML parsers in the Apache Xerces family.

Affected versions of this package are vulnerable to Denial of Service (DoS).

XMLScanner.java in Apache Xerces2 Java, as used in Sun Java Runtime Environment (JRE) in JDK and JRE 6 before Update 15 and JDK and JRE 5.0 before Update 20, and in other products, allows remote attackers to cause a denial of service (infinite loop and application hang) via malformed XML input, as demonstrated by the Codenomicon XML fuzzing framework.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2009-2625)
