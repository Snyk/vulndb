## Overview
[`ag-grid`](https://www.npmjs.com/package/ag-grid) is an advanced Data Grid / Data Table supporting Javascript / React / AngularJS / Web Components.
When using user input to perform tasks on the server, characters like \< \> \" \' must escaped properly. Otherwise, an attacker can manipulate the input to introduce additional attributes, and potentially execute a Cross-Site Scripting (XSS) attack.

**Note:** The vulnerability is exploitable only when used alongside `AngularJS`.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
There is no fix version for `ag-grid`.

## References
- [Rob Winch Blog](https://spring.io/blog/2016/01/28/angularjs-escaping-the-expression-sandbox-for-xss)
- [GitHub Issue](https://github.com/ceolter/ag-grid/issues/1287)
- [Issue #AG-158](https://www.ag-grid.com/ag-grid-pipeline/)
