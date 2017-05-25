## Overview
[`org.apache.tika:tika-parsers`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22tika-parsers%22)
Affected versions of the package are vulnerable to Arbitrary Code Execution. Apache Tika wraps the [jmatio parser](https://github.com/gradusnikov/jmatio) to handle MATLAB files.  The parser uses native deserialization on serialized Java objects embedded in MATLAB files. A malicious user could inject arbitrary code into a MATLAB file that would be executed when the object is deserialized. 

## References
- [Seclists](http://seclists.org/bugtraq/2016/Nov/40)
