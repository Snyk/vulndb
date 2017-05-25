## Overview
[`org.apache.xmlgraphics:fop`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22fop%22)
In Apache FOP before 2.2, files lying on the filesystem of the server which uses FOP can be revealed to arbitrary users who send maliciously formed SVG files. The file types that can be shown depend on the user context in which the exploitable application is running. If the user is root a full compromise of the server - including confidential or sensitive files - would be possible. XXE can also be used to attack the availability of the server via denial of service as the references within a xml document can trivially trigger an amplification attack.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-5661)
- [Apache Security Advisory](https://xmlgraphics.apache.org/security.html)
