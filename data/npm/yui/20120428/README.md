## Overview
[`yui`](https://www.npmjs.com/package/yui) is an open source JavaScript and CSS framework for building richly interactive web applications.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) attacks via the JSON parser. It is possible to inject HTML in the "text" version of the AutoComplete result (e.g. "<b>foo</b>"). An attacker may manipulate the content of  the results to carry out an XSS attack.

## Remediation
Upgrade `yui` to version 3.5.1 or higher.

## References
- [GitHub Commit](https://github.com/yui/yui3/commit/c5a4b8ccdcdae7142a0fd8d9a3ec3a499cd60b3d)
- [GitHub Release Notes](https://github.com/yui/yui2/blob/master/RELEASENOTES#L124)
