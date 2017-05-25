## Overview
[`org.apache.santuario:xmlsec`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22xmlsec%22)
For certain XML documents, it is possible to modify the document and the
streaming XML Signature verification code will not report an error when trying
to validate the signature.

Please note that the "in-memory" (DOM) API for XML Signature is not affected
by this issue, nor is the JSR-105 API. Also, web service stacks that use the
streaming functionality of Apache Santuario (such as Apache CXF/WSS4J) are also
not affected by this vulnerability.

## References

- [Redhat Bugzilla](https://bugzilla.redhat.com/CVE-2014-8152)
- [Apache Mailing List Archive](http://santuario.apache.org/secadv.data/CVE-2014-8152.txt)
- [Apache-SVN](http://svn.apache.org/viewvc?view=revision&revision=1634334)
