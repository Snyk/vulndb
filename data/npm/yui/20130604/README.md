## Overview
[`yui`](https://www.npmjs.com/package/yui) is an open source JavaScript and CSS framework for building richly interactive web applications.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) via the `io.swf` file that was inadvertently reintroduced in version 3.10.2. A carefully constructed URL accessing `io.swf` directly could cause it to execute JavaScript and potentially expose cookies or other sensitive information from the hosted site.

This vulnerability is similar to [CVE-2013-4941](https://snyk.io/vuln/npm:yui:20130515).

## Remediation
Upgrade `yui` to version 3.10.3 or higher.

## References
- [YUI Security Updates](http://yuilibrary.com/support/20130515-vulnerability/)
- [YUI Blog](http://yuiblog.com/blog/2013/06/06/yui-3-10-3-released-to-fix-reintroduced-swf-vulnerability/)
- [GitHub Commit](https://github.com/yui/yui3/commit/da0d3a401ebf5a9cfab30e9ca7621aaf73ace79c)
