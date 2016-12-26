## Overview
[`jquery-migrate`](https://www.npmjs.com/package/jquery-migrate) is package that helps migrate older jQuery code to jQuery 3.0+. It is an official plugin to jQuery.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS). The `jquery-migrate` package used code from an older jquery library that contained the vulnerable `location.hash()` function. It was used to select elements, but also allows remote attackers to inject script into the page.

Related to [this vulnerability](https://snyk.io/vuln/npm:jquery:20110606) in the jQuery package.

## Remediation
Upgrade `jquery-migrate` to version 1.2.1 or higher.

## References
- [Minded Security Blog](http://blog.mindedsecurity.com/2013/04/jquery-migrate-is-sink-too.html)
- [Github Issue](https://github.com/jquery/jquery-migrate/issues/36)
- [Github Commit](https://github.com/jquery/jquery-migrate/commit/91d55f51fd28908d98d5c5fba6b63c3475213556)
- [JSFiddle](http://jsfiddle.net/GFdJD/3/)
