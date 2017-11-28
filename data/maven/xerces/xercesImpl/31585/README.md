## Overview
[`xerces:xercesImpl`](http://xerces.apache.org/) is the next generation of high performance, fully compliant XML parsers in the Apache Xerces family.

Affected versions of the package are vulnerable to Denial of Service (DoS).
Apache Xerces2 Java allows remote attackers to cause a denial of service (CPU consumption) via a crafted message to an XML service, which triggers hash table collisions.

## Remediation
There is no fix version for `xerces:xercesImpl`.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2012-0881)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=787104)
