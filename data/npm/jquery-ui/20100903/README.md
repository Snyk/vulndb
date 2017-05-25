## Overview
[`jquery-ui`](https://www.npmjs.com/package/jquery-ui) is a curated set of user interface interactions, effects, widgets, and themes built on top of the jQuery JavaScript Library..
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) due to improper escaping of the title option in `jquery.ui.dialog.js`, before it being set in the DOM. This results in an XSS vulnerability for applications with dynamic titles.

## Remediation
Upgrade `jquery-ui` to version 1.10.0 or higher.

## References
- [Jquery Ticket](https://bugs.jqueryui.com/ticket/6016)
- [GitHub Commit](https://github.com/jquery/jquery-ui/commit/7e9060c109b928769a664dbcc2c17bd21231b6f3)
- [Openwall](http://www.openwall.com/lists/oss-security/2014/11/14/8)
