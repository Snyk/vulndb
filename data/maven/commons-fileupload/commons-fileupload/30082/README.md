## Overview
[`commons-fileupload:commons-fileupload`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22commons-fileupload%22)
Affected versions of this package are vulnerable to Denia of Service (DoS) attacks. An attacker can upload a file with a long boundry string in the HTTP header, causing high CPU consumption.

## Details
The `MultipartStream` class contains a flaw that allows remote attackers to cause a Denial of service (CPU consumption) attacks. This happens by setting the length of the multipart boundary to be just below the size of the buffer (4096 bytes) used to read the uploaded file. Typically, the boundary is tens of bytes long, which caused this case to take much longer than usual.

## References
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1349475)
- [Apache Mailing Archives](http://mail-archives.us.apache.org/mod_mbox/www-announce/201606.mbox/%3C6223ece6-2b41-ef4f-22f9-d3481e492832@apache.org%3E)
- [Apache-SVN](http://svn.apache.org/viewvc/commons/proper/fileupload/trunk/RELEASE-NOTES.txt?r1=1745717&r2=1749637&diff_format=h)
- [CVE](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-3092)
