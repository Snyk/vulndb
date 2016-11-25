## Overview
[`jquery`](https://www.npmjs.com/package/jquery) is JavaScript library for DOM operations.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS). The `location.hash()` function was used to select elements, but also allows remote attackers to inject script into the page.

Related to [this vulnerability](https://snyk.io/vuln/npm:jquery-migrate:20130419) in the jQuery-migrate package

## Remediation
Upgrade `jquery` to version 1.6.3 or higher.

## References
- [JQuery Ticket](https://bugs.jquery.com/ticket/9521)
- [Jquery Release Note](http://blog.jquery.com/2011/09/01/jquery-1-6-3-released/)
- [Openwall](http://www.openwall.com/lists/oss-security/2013/01/31/3)
