## Overview
[`commons-fileupload:commons-fileupload`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22commons-fileupload%22)
Affected versions of this package are vulnerable to Denial of Service (DoS) attacks. An attacker may send a specially crafted `Content-Type` header that bypasses a loop's intended exit conditions, causing an infinite loop and high CPU consumption.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-0050)
- [Github ChangeLog](https://github.com/apache/commons-fileupload/blob/master/src/changes/changes.xml#L90)
- [Oren Hafif Blog](http://blog.spiderlabs.com/2014/02/cve-2014-0050-exploit-with-boundaries-loops-without-boundaries.html)
- [Apache-SVN](http://svn.apache.org/viewvc?view=revision&revision=1565143)
- [Apache Mailing list archives](http://mail-archives.apache.org/mod_mbox/www-announce/201402.mbox/%3C52F373FC.9030907@apache.org%3E)
- [Issue documentation](http://struts.apache.org/docs/s2-020.html)
