## Overview
[`org.apache.felix.karaf:org.apache.felix.karaf.client`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22org.apache.felix.karaf.client%22)
Affected versions of the package are vulnerable to Information Exposure due to storing the password with the `interactive()` method. This method stores sensitive data in a String object, making it impossible to reliably purge the data from memory. 

## References
- [Jira Issue](https://issues.apache.org/jira/browse/KARAF-4199)
