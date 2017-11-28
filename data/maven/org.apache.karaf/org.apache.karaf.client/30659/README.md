## Overview
[`org.apache.karaf:org.apache.karaf.client`](https://karaf.apache.org/) is a modern and polymorphic container.

Affected versions of this package are vulnerable to Information Exposure due to storing the password with the `interactive()` method. This method stores sensitive data in a String object, making it impossible to reliably purge the data from memory.

## References
- [Jira Issue](https://issues.apache.org/jira/browse/KARAF-4199)
- [Vulnerable Code](https://github.com/apache/karaf/blob/539540cde099aee52fd523a09aca92e36522261c/client/src/main/java/org/apache/karaf/client/Main.java#L127)
