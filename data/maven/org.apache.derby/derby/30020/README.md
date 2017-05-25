## Overview
[`org.apache.derby:derby`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22derby%22)
XML external entity (XXE) vulnerability in the SqlXmlUtil code in Apache Derby before 10.12.1.1, when a Java Security Manager is not in place, allows context-dependent attackers to read arbitrary files or cause a denial of service (resource consumption) via vectors involving XmlVTI and the XML datatype.

## References

- [Jira Issue](https://issues.apache.org/jira/browse/DERBY-6807)
- [Apache Mailing Archives](http://mail-archives.apache.org/mod_mbox/db-derby-dev/201505.mbox/%3CJIRA.12827400.1430855874000.6985.1430856060110@Atlassian.JIRA%3E)
