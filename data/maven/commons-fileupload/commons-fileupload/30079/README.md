## Overview
[`commons-fileupload:commons-fileupload`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22commons-fileupload%22)
Commons FileUpload provides file upload capability for Servlets and web applications. During the upload process, FileUpload may (depending on configuration) save the uploaded file temporarily on disk. By default this will be in the system wide tmp directory. Because the temporary files have predictable file names and are stored in a publicly writeable location they are vulnerable to a TOCTOU attack.

A successful attack requires that the attacker has write access to the tmp directory. The attack can be prevented by setting the repository to a non-publicly writeable location.
The documentation for FileUpload does not highlight the potential security implications of not setting a repository, nor do the provided examples set a repository. This may have caused users to use FileUpload in an insecure manner.

## References
- [Redhat Bugzilla](https://bugzilla.redhat.com/CVE-2013-0248)
- [Commons-user Mailing List](http://mail-archives.apache.org/mod_mbox/commons-user/201303.mbox/%3C51371C31.8020805@apache.org%3E)
