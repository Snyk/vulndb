## Overview
[`com.sun.faces:jsf-impl`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22jsf-impl%22)
Oracle Mojarra 2.2.x before 2.2.6 and 2.1.x before 2.1.28 does not perform appropriate encoding when a (1) <h:outputText> tag or (2) EL expression is used after a scriptor style block, which allows remote attackers to conduct cross-site scripting (XSS) attacks via application-specific vectors.

## References

- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2013-5855)
- [Jira Bug](https://java.net/jira/browse/JAVASERVERFACES-3150)
- [Alvaro Munoz Blog](http://h30499.www3.hp.com/t5/HP-Security-Research-Blog/JSF-outputText-tag-the-good-the-bad-and-the-ugly/bc-p/6370209)
