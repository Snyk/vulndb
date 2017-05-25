## Overview
[`com.thoughtworks.xstream:xstream`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22xstream%22) is a simple library to serialize objects to XML and back again.
Multiple XML external entity (XXE) vulnerabilities in the (1) Dom4JDriver, (2) DomDriver, (3) JDomDriver, (4) JDom2Driver, (5) SjsxpDriver, (6) StandardStaxDriver, and (7) WstxDriver drivers in XStream before 1.4.9 allow remote attackers to read arbitrary files via a crafted XML document.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-3674)
- [OSS Security](http://www.openwall.com/lists/oss-security/2016/03/28/1)
- [Github Issue](https://github.com/x-stream/xstream/issues/25)
