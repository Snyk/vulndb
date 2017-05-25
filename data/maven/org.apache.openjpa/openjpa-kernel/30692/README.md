## Overview
[`org.apache.openjpa:openjpa-kernel`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22openjpa-kernel%22)
The BrokerFactory functionality in Apache OpenJPA 1.x before 1.2.3 and 2.x before 2.2.2 creates local executable JSP files containing logging trace data produced during deserialization of certain crafted OpenJPA objects, which makes it easier for remote attackers to execute arbitrary code by creating a serialized object and leveraging improperly secured server programs.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-1768)