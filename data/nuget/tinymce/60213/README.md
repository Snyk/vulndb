## Overview
[`tinymce`](https://www.npmjs.com/package/tinymce) is a web based JavaScript HTML WYSIWYG editor control.
The `tinymce` media plugin has security controls that aim to mitigate Cross-site Scripting (XSS) attacks, but did not filter script elements in the default config implementations, allowing an attacker to perform an Cross-site Scripting (XSS) attack.

## Remediation
Upgrade `tinymce` to version 4.2.0 or higher.

## References
- [GitHub Commit](https://github.com/tinymce/tinymce/commit/9c78e4a4f9aad14f3e86094b36f163177f38c248)
