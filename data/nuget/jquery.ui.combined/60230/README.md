
Affected versions of [`jQuery.UI.Combined`](https://www.nuget.org/packages/jQuery.UI.Combined) are vulnerable to Cross-site Scripting (XSS) due to improper escaping of the title option in `jquery.ui.dialog.js`, before it being set in the DOM. This results in an XSS vulnerability for applications with dynamic titles.

## Remediation
Upgrade `jQuery.UI.Combined` to version 1.10.0 or higher.

## References
- [Jquery Ticket](https://bugs.jqueryui.com/ticket/6016)
- [GitHub Commit](https://github.com/jquery/jquery-ui/commit/7e9060c109b928769a664dbcc2c17bd21231b6f3)
- [Openwall](http://www.openwall.com/lists/oss-security/2014/11/14/8)
