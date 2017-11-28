## Overview
[`org.apache.karaf.jaas:org.apache.karaf.jaas.modules`](https://karaf.apache.org/) is a modern and polymorphic container.

Affected versions of this package are vulnerable to Information Exposure due to storing the password with the `interactive()` method. This method stores sensitive data in a String object, making it impossible to reliably purge the data from memory.

## References
- [Jira Issue](https://issues.apache.org/jira/browse/KARAF-4199)
- [Vulnerable Code](https://github.com/apache/karaf/blob/43d8cd0ae2368ce40465ea5511c5c150ec82e275/jaas/modules/src/main/java/org/apache/karaf/jaas/modules/jdbc/JDBCLoginModule.java#L95)
