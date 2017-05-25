## Overview
[`org.apache.wink:wink-server`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22wink-server%22)
Affected versions of the package are vulnerable to XML External Entity (XXE) Injection. The XML Parser in Wink is configured with a default entity resolver, allowing an attacker to construct a specially crafted file which may instruct the parser to access arbitrary resources.

## References
- [Github Security Issue](https://github.com/apache/wink/blob/trunk/security/CVE-2010-2245.pdf)
