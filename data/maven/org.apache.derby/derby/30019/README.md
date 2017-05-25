## Overview
[`org.apache.derby:derby`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22derby%22)
The password hash generation algorithm in the BUILTIN authentication functionality for Apache Derby before 10.6.1.0 performs a transformation that reduces the size of the set of inputs to SHA-1, which produces a small search space that makes it easier for local and possibly remote attackers to crack passwords by generating hash collisions, related to password substitution.

## References

- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2009-4269)
- [Jira Issue](https://issues.apache.org/jira/browse/DERBY-4483)
- [Derby Release Notes](http://db.apache.org/derby/releases/release-10.6.1.0.html#Fix+for+Security+Bug+CVE-2009-4269)
