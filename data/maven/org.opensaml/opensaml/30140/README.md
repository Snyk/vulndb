## Overview
[`org.opensaml:opensaml`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22opensaml%22)
It was discovered that HttpResource and FileBackedHttpResource implementations in OpenSAML Java and Shibboleth IdP did not enable hostname verification when using TLS connections. Additionaly, OpenSAML Java makes use of Jakarta Commons HttpClient version 3.x, which does not perform verification of the server hostname against the server's X.508 certificate ([CVE-2012-5783](https://snyk.io/vuln/SNYK-JAVA-COMMONSHTTPCLIENT-30083)). This flaw can be exploited by a Man-in-the-middle (MITM) attack, where the attacker can spoof a valid certificate using a specially crafted subject.

## References

- [Redhat Bugzilla](https://bugzilla.redhat.com/CVE-2014-3603)
- [Shibboleth Advisory](http://shibboleth.net/community/advisories/secadv_20140813.txt)
