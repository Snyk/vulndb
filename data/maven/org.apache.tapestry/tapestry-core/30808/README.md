## Overview
[`org.apache.tapestry:tapestry-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22tapestry-core%22)
Apache Tapestry before 5.3.6 relies on client-side object storage without checking whether a client has modified an object, which allows remote attackers to cause a denial of service (resource consumption) or execute arbitrary code via crafted serialized data.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-1972)