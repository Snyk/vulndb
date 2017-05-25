## Overview
[`org.python:jython-standalone`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22jython-standalone%22)
Affected versions of this package are vulnerable to Arbitrary Code Execution by sending a serialized function to the deserializer, which in turn will execute the code.

## References
- [CVE](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-4000)
- [Jython Bug Report](http://bugs.jython.org/issue2454)
- [Fix Commit](https://hg.python.org/jython/rev/d06e29d100c0)
