## Overview
[`org.opensaml:xmltooling`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22xmltooling%22)
The (1) BasicParserPool, (2) StaticBasicParserPool, (3) XML Decrypter, and (4) SAML Decrypter in Shibboleth OpenSAML-Java before 2.6.1 set the expandEntityReferences property to true, which allows remote attackers to conduct XML external entity (XXE) attacks via a crafted XML DOCTYPE declaration.

## References

- [Redhat Bugzilla](https://bugzilla.redhat.com/CVE-2013-6440)
- [SendSafely Blog](https://blog.sendsafely.com/web-based-single-sign-on-and-the-dangers-of-saml-xml-parsing)
