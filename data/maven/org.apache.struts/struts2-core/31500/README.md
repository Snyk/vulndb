## Overview
[Apache Struts2](http://struts.apache.org/) is a popular open-source framework for developing web applications in the Java programming language.

Affected versions of this package are vulnerable to Denial of Service (DoS) attacks.
When using a Spring AOP functionality to secure Struts actions it is possible to perform a DoS attack.


## Remediation
Upgrade `org.apache.struts:struts2-core` to version 2.3.33, 2.5.12 or higher.

## References
- [Struts Security Bulletin](http://struts.apache.org/docs/s2-049.html)
- [Struts Announcements Mailing List](https://lists.apache.org/thread.html/3795c4dd46d9ec75f4a6eb9eca11c11edd3e796c6c1fd7b17b5dc50d@%3Cannouncements.struts.apache.org%3E)
