## Overview
[`jquery`](https://www.npmjs.com/package/jquery) is JavaScript library for DOM operations.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS), `jQuery(strInput)` cannot reliably differentiate selectors from HTML.
`quickExpr` was abandoned in favor of a simpler "parse as HTML if and only if there is a leading less-than" rule, with intentional parsing handled by the `jQuery( "<div/>" ).html( strHtml ).contents()` pattern.

## Remediation
Upgrade `jquery` to version 1.9.0 or higher.

## References
- [JQuery Issue tracker](https://bugs.jquery.com/ticket/11290)
- [Github Commit](https://github.com/jquery/jquery/commit/05531fc4080ae24070930d15ae0cea7ae056457d)
- [jsfiddle](http://jsfiddle.net/C8dgG/)
