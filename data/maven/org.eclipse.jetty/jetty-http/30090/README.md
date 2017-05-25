## Overview
[`org.eclipse.jetty:jetty-http`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22jetty-http%22)
The exception handling code in Eclipse Jetty before 9.2.9.v20150224 allows remote attackers to obtain sensitive information from process memory via illegal characters in an HTTP header, aka JetLeak.

## References

- [GDS Blog](http://blog.gdssecurity.com/labs/2015/2/25/jetleak-vulnerability-remote-leakage-of-shared-buffers-in-je.html)
- [Jetty Security Reports](http://eclipse.org/jetty/documentation/current/security-reports.html)
- [GitHub Jetleak Testing Script Repo](https://github.com/GDSSecurity/Jetleak-Testing-Script)
