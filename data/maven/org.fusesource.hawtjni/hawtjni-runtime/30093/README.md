## Overview
[`org.fusesource.hawtjni:hawtjni-runtime`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22hawtjni-runtime%22)
Race condition in hawtjni-runtime/src/main/java/org/fusesource/hawtjni/runtime/Library.java in HawtJNI before 1.8, when a custom library path is not specified, allows local users to execute arbitrary Java code by overwriting a temporary JAR file with a predictable name in /tmp.

## References

- [Redhat Bugzilla](https://bugzilla.redhat.com/CVE-2013-2035)
- [Github Commit](https://github.com/fusesource/hawtjni/commit/92c266170ce98edc200c656bd034a237098b8aa5)
