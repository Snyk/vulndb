## Overview
[`com.thoughtworks.xstream:xstream`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22xstream%22) is a simple library to serialize objects to XML and back again.
XStream could deserialize arbitrary user-supplied XML content, representing objects of any type. A remote attacker able to pass XML to XStream could use this flaw to perform a variety of attacks, including remote code execution in the context of the server running the XStream application

## References

- [Redhat Bugzilla](https://bugzilla.redhat.com/CVE-2013-7285)
- [Dinis Cruz Blog](http://blog.diniscruz.com/2013/12/xstream-remote-code-execution-exploit.html)
- [Fisheye](https://fisheye.codehaus.org/changelog/xstream?cs=2210)
