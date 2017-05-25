## Overview
[`struts:struts`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22struts%22)
Apache Commons BeanUtils, as distributed in lib/commons-beanutils-1.8.0.jar in Apache Struts 1.x through 1.3.10 and in other products requiring commons-beanutils through 1.9.2, does not suppress the class property, which allows remote attackers to "manipulate" the ClassLoader and execute arbitrary code via the class parameter, as demonstrated by the passing of this parameter to the getClass method of the ActionForm object in Struts 1.

## References

- [NVD](http://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-0114)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1091938)
- [Alvaro Munoz Blog](http://h30499.www3.hp.com/t5/HP-Security-Research-Blog/Protect-your-Struts1-applications/ba-p/6463188#.U2J7xeaSxro)
