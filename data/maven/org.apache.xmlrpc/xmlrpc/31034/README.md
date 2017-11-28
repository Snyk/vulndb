## Overview
[`org.apache.xmlrpc:xmlrpc`](https://ws.apache.org/xmlrpc/) is a Java implementation of XML-RPC, a popular protocol that uses XML over HTTP to implement remote procedure calls.

Affected versions of the package are vulnerable to Denial of Service (DoS). By default `ws-xmlrpc` supports `Content-Encoding` HTTP header. When sending `Content-Encoding: gzip` header, the body is not gzipped, and an error returns. An attacker may create a specially crafted compressed file and cause a Denial of Service attack, also known as `decompression bomb` attack.

## References
- [OSS Security](http://seclists.org/oss-sec/2016/q3/48)
- [0ang3el Blog](https://0ang3el.blogspot.co.il/2016/07/beware-of-ws-xmlrpc-library-in-your.html)
