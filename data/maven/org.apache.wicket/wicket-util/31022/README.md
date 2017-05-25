## Overview
[`org.apache.wicket:wicket-util`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22wicket-util%22)
Affected versions of the package are vulnerable to Deserialization of untrusted data. Depending on the ISerializer set in the Wicket application, it's possible that a Wicket's object deserialized from an untrusted source and utilized by the application to causes the code to enter in an infinite loop. Specifically, Wicket's DiskFileItem class, serialized by Kryo, allows an attacker to hack its serialized form to put a client on an infinite loop if the client attempts to write on the DeferredFileOutputStream attribute.

## References
- [OSS Security](http://seclists.org/oss-sec/2016/q4/785)
- [Apache Wicket Security Advisory](https://wicket.apache.org/news/2016/12/31/cve-2016-6793.html)
