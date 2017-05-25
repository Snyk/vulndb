## Overview
[`com.jcraft:jsch`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22jsch%22) is a pure Java implementation of SSH2.
Directory traversal vulnerability in JCraft JSch before 0.1.54 on Windows, when the mode is ChannelSftp.OVERWRITE, allows remote SFTP servers to write to arbitrary files via a `..\` (dot dot backslash) in a response to a recursive GET command.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-5725)
- [Github Vulnerability description](https://github.com/tintinweb/pub/tree/master/pocs/cve-2016-5725)
