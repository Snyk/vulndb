## Overview
[`org.apache.poi:poi`](http://poi.apache.org/) is the Java API for Microsoft Documents.
Apache POI in versions prior to release 3.15 allows remote attackers to cause a denial of service (CPU consumption) via a specially crafted OOXML file, aka an XML Entity Expansion (XEE) attack.

## Remediation
Upgrade `org.apache.poi:poi` to version 3.15 or higher.

## References
- [POI Release Notes](http://poi.apache.org/#20+March+2017+-+CVE-2017-5644+-+Possible+DOS+%28Denial+of+Service%29+in+Apache+POI+versions+prior+to+3.15)
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-5644)
- [Github Commit](https://github.com/apache/poi/commit/3a328aa220f6979f9805f658ae33244d153beaa7)
