## Overview
[`yui`](https://www.npmjs.com/package/yui) is an open source JavaScript and CSS framework for building richly interactive web applications.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) via YUI `.swf` files, allowing arbitrary code injection into the hosting server.

This vulnerability is similar to [CVE-2012-5881](https://snyk.io/vuln/npm:yui:20121030).

## Remediation
Upgrade `yui` to version 2.8.2 or higher.

## References
- [YUI Security Updates](http://yuiblog.com/blog/2010/10/25/yui-2-8-2-security-update/)
