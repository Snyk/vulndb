## Overview
[`org.apache.santuario:xmlsec`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22xmlsec%22)
jcp/xml/dsig/internal/dom/DOMCanonicalizationMethod.java in Apache Santuario XML Security for Java 1.4.x before 1.4.8 and 1.5.x before 1.5.5 allows context-dependent attackers to spoof an XML Signature by using the CanonicalizationMethod parameter to specify an arbitrary weak "canonicalization algorithm to apply to the SignedInfo part of the Signature."

## References

- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2013-2172)
- [Apache Mail Archives](http://santuario.apache.org/secadv.data/CVE-2013-2172.txt.asc)
