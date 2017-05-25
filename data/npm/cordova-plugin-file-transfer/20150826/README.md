## Overview
[`cordova-plugin-file-transfer`](https://www.npmjs.com/package/cordova-plugin-file-transfer) is a Cordova File Transfer Plugin.

Affected versions of the package are vulnerable to CRLF Injection. This allows remote attackers to inject arbitrary headers via CRLF sequences in the filename of an uploaded file.

## Remediation
Upgrade `cordova-plugin-file-transfer` to version 1.3.0 or higher.

## References
- [Github PR](https://github.com/apache/cordova-plugin-file-transfer/pull/99)
- [Cordova Announcement](https://cordova.apache.org/news/2015/09/21/file-transfer-release.html)
