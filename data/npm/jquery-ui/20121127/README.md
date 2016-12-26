## Overview
[`jquery-ui`](https://www.npmjs.com/package/jquery-ui) is a curated set of user interface interactions, effects, widgets, and themes built on top of the jQuery JavaScript Library..
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) via the tooltip title attribute not being escaped and was treated as html and not text.

## Remediation
Upgrade `jquery-ui` to version 1.10.0 or higher.

## References
- [JQuery UI Ticket](https://bugs.jqueryui.com/ticket/8861)
- [Github Commit](https://github.com/jquery/jquery-ui/commit/f2854408cce7e4b7fc6bf8676761904af9c96bde)
