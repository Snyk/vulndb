## Overview
Affected versions of [`org.apache.brooklyn:brooklyn`](https://brooklyn.apache.org) are vulnerable to Arbitrary Code Execution.

Apache Brooklyn uses the SnakeYAML library for parsing YAML inputs. SnakeYAML allows the use of YAML tags to indicate that SnakeYAML should unmarshal data to a Java type. In the default configuration in Brooklyn before 0.10.0, SnakeYAML will allow unmarshalling to any Java type available on the classpath. This could provide an authenticated user with a means to cause the JVM running Brooklyn to load and run Java code without detection by Brooklyn. Such code would have the privileges of the Java process running Brooklyn, including the ability to open files and network connections, and execute system commands. There is known to be a proof-of-concept exploit using this vulnerability.

## Remediation
Upgrade `org.apache.brooklyn:brooklyn` to version 0.10.0 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2016-8744)
- [Apache Brooklyn Security Notice](https://brooklyn.apache.org/community/security/CVE-2016-8744.html)
