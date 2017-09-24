## Overview
[`org.apache.cxf:cxf`](https://http://cxf.apache.org/) is an open source services framework.
Affected versions of the package are vulnerable to Information Exposure. A number of attacks were found on the PKCS#1 v1.5 Key Transport Algorithm. One of these attacks exploits the fact that WSS4J can leak information about where a particular decryption operation fails. This bug has been fixed in WSS4J 1.6.5, where a new symmetric key is generated if the decryption of the encrypted key fails. In this way it is not possible for an attacker to find out whether a decryption failure was due to the failure of decrypting the key or the data.

## References
- [Apache Security Advisory](http://cxf.apache.org/note-on-cve-2011-2487.html)
