## Overview
[`angular-gettext`](https://www.npmjs.com/package/angular-gettext) is Gettext support for Angular.js.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) when the project includes both `angular-gettext` and `jQuery`.

## Remediation
Upgrade `angular-gettext` to version 0.4.0 or higher.

## References
- [GitHub Commit](https://github.com/rubenv/angular-gettext/commit/a1ef4c26c3cae348c601cbbf2f9f4ac96f397755)
- [GitHub Issue](https://github.com/rubenv/angular-gettext/issues/74)
