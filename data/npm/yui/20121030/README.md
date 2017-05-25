## Overview
[`yui`](https://www.npmjs.com/package/yui) is an open source JavaScript and CSS framework for building richly interactive web applications.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) via `.swf` files, allowing arbitrary code injection into the hosting server.

**Notes:**
- If your site loads YUI 2 from a CDN (yui.yahooapis.com, ajax.googleapis.com, etc.) and not from your own domain, you are not affected.
- YUI 3 is not affected by this issue.
- Whether or not your site uses the affected components, simply hosting an affected file means you are vulnerable.

This vulnerability is similar to [CVE-2010-4207](https://snyk.io/vuln/npm:yui:20101025).

## Remediation
Upgrade `yui` to version 3.0.0 or higher.

## References
- [YUI Security Updates](http://yuilibrary.com/support/20121030-vulnerability/)
