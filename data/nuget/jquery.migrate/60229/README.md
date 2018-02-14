## Overview

Affected versions of [`jQuery.Migrate`](https://www.nuget.org/packages/jQuery.Migrate) are vulnerable to Cross-site Scripting (XSS).

The `jquery-migrate` package used code from an older jquery library that contained the vulnerable `location.hash()` function. It was used to select elements, but also allows remote attackers to inject script into the page.

## Remediation
Upgrade `jQuery.Migrate` to version 1.2.1 or higher.

## References
- [jQuery Migrate 1.2.0 Release Notes](http://blog.jquery.com/2013/05/01/jquery-migrate-1-2-0-released/)
- [jQuery Migrate 1.2.1 Release Notes] (https://blog.jquery.com/2013/05/08/jquery-migrate-1-2-1-released/)
- [Minded Security Blog](http://blog.mindedsecurity.com/2013/04/jquery-migrate-is-sink-too.html)
- [GitHub Issue](https://github.com/jquery/jquery-migrate/issues/36)
- [GitHub Commit](https://github.com/jquery/jquery-migrate/commit/91d55f51fd28908d98d5c5fba6b63c3475213556)
- [JSFiddle](http://jsfiddle.net/GFdJD/3/)
