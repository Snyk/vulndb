## Overview
[`textangular`](https://www.npmjs.com/package/textangular) is a powerful Text-Editor/Wysiwyg editor for Angular.js.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) due to not sanitizing the user input, allowing `<script>` tags to pass into the command and run javascript.

## Remediation
Upgrade `textangular` to version 1.2.0 or higher.

## References
- [Github Issue](https://github.com/fraywing/textAngular/issues/62)
- [Github PR](https://github.com/fraywing/textAngular/pull/72)
- [Github Commit](https://github.com/fraywing/textAngular/commit/eea6ec6c390301a673d89bc0eda1ba92c038b444)
