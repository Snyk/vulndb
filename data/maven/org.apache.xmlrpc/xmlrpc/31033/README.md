## Overview
[`org.apache.xmlrpc:xmlrpc`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22xmlrpc%22)
Affected versions of the package are vulnerable to Deserialization of Untrusted Data. By default `ws-xmlrpc` supports `java.io.Serializable` data types through `<ex:serializable>` element. An attackar can leverage this to call a method and pass a serialized Java object in that element. `ws-xmlrpc` will deserialize the malicious object without validation.


## References
- [OSS Security](http://seclists.org/oss-sec/2016/q3/48)
- [0ang3el Blog](https://0ang3el.blogspot.co.il/2016/07/beware-of-ws-xmlrpc-library-in-your.html)
