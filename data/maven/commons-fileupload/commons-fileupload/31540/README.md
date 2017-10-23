## Overview
[`commons-fileupload:commons-fileupload`](https://commons.apache.org/proper/commons-fileupload/) provides a simple yet flexible means of adding support for multipart file upload functionality to servlets and web applications.

Affected versions of the package are vulnerable to Information Disclosure because the `InputStream` is not closed on exception.

## Remediation
Upgrade `commons-fileupload` to version 1.3.2 or higher.

## References
- [Github ChangeLog](https://github.com/apache/commons-fileupload/blob/master/src/changes/changes.xml#L56)
- [Github Commit](https://github.com/apache/commons-fileupload/commit/5b4881d7f75f439326f54fa554a9ca7de6d60814)
