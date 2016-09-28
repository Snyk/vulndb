## Overview
[ckeditor-dev](https://www.npmjs.com/package/ckeditor-dev) is a browser-based WYSIWYG editor.
Affected versions of this package were vulnerable to Cross-Site Scripting (XSS) attacks via the HTML parser.
The vulnerability was found by [Dheeraj Joshi](https://twitter.com/dheerajhere) and [Prem Kumar](https://twitter.com/iAmPr3m)

## Remediation
Upgrade `ckeditor-dev` to version `4.5.11` or greater.

## References
- https://github.com/ckeditor/ckeditor-dev
- https://github.com/ckeditor/ckeditor-dev/blob/master/CHANGES.md#ckeditor-448
- https://github.com/ckeditor/ckeditor-dev/commit/ccd0038ca5512dbafbb975dd7ec5444ff47f7767
