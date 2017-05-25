## Overview
[`org.apache.tomcat:tomcat-coyote`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22tomcat-coyote%22)
MultipartStream.java in Apache Commons FileUpload before 1.3.1, as used in Apache Tomcat, JBoss Web, and other products, allows remote attackers to cause a denial of service (infinite loop and CPU consumption) via a crafted Content-Type header that bypasses a loop's intended exit conditions.

## References

- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-0050)
- [Oren Hafif Blog](http://blog.spiderlabs.com/2014/02/cve-2014-0050-exploit-with-boundaries-loops-without-boundaries.html)
- [Apache-SVN](http://svn.apache.org/viewvc?view=revision&revision=1565143)
- [Apache Mail Archive](http://mail-archives.apache.org/mod_mbox/www-announce/201402.mbox/%3C52F373FC.9030907@apache.org%3E)
- [Vulnerability Summary](http://struts.apache.org/docs/s2-020.html)
