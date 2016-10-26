## Overview
[`tinymce`](https://www.npmjs.com/package/tinymce) is Web based JavaScript HTML WYSIWYG editor control.
The `tinymce` media plugin has security controls that aim to mitigate Cross-Site Scripting (XSS) attacks, but overlooked certain attributes that can contain script, introducing a vulnerability.

## Remediation
Upgrade `tinymce` to version 4.2.4 or higher.

## References
- https://github.com/tinymce/tinymce
- https://github.com/tinymce/tinymce/commit/c68a5930512d7b37b5dc495bde5f7cbb739e11e7
