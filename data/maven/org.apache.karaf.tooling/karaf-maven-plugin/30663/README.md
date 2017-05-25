## Overview
[`org.apache.karaf.tooling:karaf-maven-plugin`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22karaf-maven-plugin%22)
Affected versions of this package are vulnerable to Information Exposure due to storing the password with the `interactive()` method. This method stores sensitive data in a String object, making it impossible to reliably purge the data from memory.

## References
- [Jira Issue](https://issues.apache.org/jira/browse/KARAF-4199)
- [Vulnerable Code](https://github.com/apache/karaf/blob/335620adb7b1cc92380ec9cba7eb2dbbaa8bb96c/tooling/karaf-maven-plugin/src/main/java/org/apache/karaf/tooling/client/ClientMojo.java#L147)
