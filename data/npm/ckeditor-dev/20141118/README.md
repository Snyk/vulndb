## Overview
[ckeditor-dev](https://www.npmjs.com/package/ckeditor-dev) is a browser-based WYSIWYG editor.
Affected versions of this package were vulnerable to Cross-Site Scripting (XSS) attacks. 
It was possible to execute XSS inside CKEditor after persuading the victim to: (i) switch CKEditor to source mode, then (ii) paste a specially crafted HTML code, prepared by the attacker, into the opened CKEditor source area, and (iii) switch back to WYSIWYG mode.

The vulnerability was found by Maco Cortes.

## Remediation
Upgrade `ckeditor-dev` to version `4.5.11` or greater.

## References
- https://github.com/ckeditor/ckeditor-dev
- https://github.com/ckeditor/ckeditor-dev/blob/master/CHANGES.md#ckeditor-446
- https://github.com/ckeditor/ckeditor-dev/commit/39c08f9fe691a98be61337127dad9e8e8141822f
