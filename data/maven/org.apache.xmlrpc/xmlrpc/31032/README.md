## Overview
[`org.apache.xmlrpc:xmlrpc`](https://ws.apache.org/xmlrpc/) is a Java implementation of XML-RPC, a popular protocol that uses XML over HTTP to implement remote procedure calls.

Affected versions of the package are vulnerable to Server Side Request Forgery (SSRF). Sending an XML with a `DOCTYPE` declaration that loads an external DTD, a malicious user can send a GET request to the host on behalf of a vulnerable `xml-rpc` endpoint.

## References
- [OSS Security](http://seclists.org/oss-sec/2016/q3/48)
- [0ang3el Blog](https://0ang3el.blogspot.co.il/2016/07/beware-of-ws-xmlrpc-library-in-your.html)
