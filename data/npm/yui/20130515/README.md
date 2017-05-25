## Overview
[`yui`](https://www.npmjs.com/package/yui) is an open source JavaScript and CSS framework for building richly interactive web applications.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) in `.swf` files used in the IO Utility and Uploader components. A carefully constructed URL accessing these `.swf` files directly could cause them to execute JavaScript in the context of the hosted `.swf` files and potentially expose cookies or other sensitive information from the hosted site.

This vulnerability is similar to [CVE-2013-4940](https://snyk.io/vuln/npm:yui:20130604).

## Remediation
Upgrade `yui` to version 3.10.0 or higher.

## References
- [YUI Security Updates](http://yuilibrary.com/support/20130515-vulnerability/)
- [GitHub Commit](https://github.com/yui/yui3/commit/6a2da7d0df7f4b0d347cfbfb46e131d403658fc4)
