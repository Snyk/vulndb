## Overview
[`commons-fileupload:commons-fileupload`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22commons-fileupload%22)
The MultipartStream class in Apache Commons Fileupload before 1.3.2, as used in Apache Tomcat 7.x before 7.0.70, 8.x before 8.0.36, 8.5.x before 8.5.3, and 9.x before 9.0.0.M7 and other products, allows remote attackers to cause a denial of service (CPU consumption) via a long boundary string.

## References

- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1349475)
- [Apache Mailing Archives](http://mail-archives.us.apache.org/mod_mbox/www-announce/201606.mbox/%3C6223ece6-2b41-ef4f-22f9-d3481e492832@apache.org%3E)
- [Apache-SVN](http://svn.apache.org/viewvc/commons/proper/fileupload/trunk/RELEASE-NOTES.txt?r1=1745717&r2=1749637&diff_format=h)
- [CVE](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-3092)
