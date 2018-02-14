## Overview
[`org.apache.httpcomponents:httpclient`](https://hc.apache.org/) is responsible for creating and maintaining a toolset of low level Java components focused on HTTP and associated protocols.

Affected versions of this pacage are vulnerable to Man-in-the-Middle (MitM) attacks.

http/impl/client/HttpClientBuilder.java in Apache HttpClient 4.3.x before 4.3.1 does not ensure that X509HostnameVerifier is not null, which allows attackers to have unspecified impact via vectors involving hostname verification.
## References
- [HTTPComponents Release Notes](http://www.apache.org/dist/httpcomponents/httpclient/RELEASE_NOTES-4.3.x.txt)
