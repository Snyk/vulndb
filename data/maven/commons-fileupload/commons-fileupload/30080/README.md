## Overview
[`commons-fileupload:commons-fileupload`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22commons-fileupload%22)
Affected versions of this package are vulnerable to Arbitrary File Write.

## Details
The DiskFileItem class in Apache Commons FileUpload, as used in Red Hat JBoss BRMS 5.3.1; JBoss Portal 4.3 CP07, 5.2.2, and 6.0.0; and Red Hat JBoss Web Server 1.0.2 allows remote attackers to write to arbitrary files via a NULL byte in a file name in a serialized instance.

## References
- [Redhat Security Advisory](https://access.redhat.com/security/cve/CVE-2013-2186)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2013-2186)
