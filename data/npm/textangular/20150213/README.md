## Overview
[`textangular`](https://www.npmjs.com/package/textangular) is A radically powerful Text-Editor/Wysiwyg editor for Angular.js.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS), due to improper validation of user-supplied input. A malicious user could exploit this vulnerability by creating a specially-crafted URL that injects script into a victim's browser, and be exposed to sensitive information like the user's cookies.

## Remediation
Upgrade `textangular` to version 1.3.7 or higher.

## References
- [Github Changelog](https://github.com/fraywing/textAngular/releases/tag/v1.3.7)
- [Guthub Commit](https://github.com/fraywing/textAngular/commit/f5f27c26bc99dc6f8bb226d7beb99ce8bcada01a)
