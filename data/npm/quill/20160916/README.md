## Overview
[`quill`](https://www.npmjs.com/package/quill) is powerful, rich text editor.
Affected versions of the package are vulnerable to Arbitrary Code Execution due to not sanitizing user input when in the `pasteHTML()` function. The function was renamed, deprecated and was set to be removed in version `2.0.0`.

```js
var quill = new Quill('#editor', {
  theme: 'snow'
});

quill.pasteHTML('<img src=// onerror="alert(\'Not Found!\')">');
```

## Remediation
Upgrade `quill` to version 1.0.4 or higher.

## References
- [Github PR](https://github.com/quilljs/quill/pull/990)
- [Github Issue](https://github.com/quilljs/quill/issues/981)
- [Github Commit](https://github.com/quilljs/quill/commit/d1149adff6b562fcfc62b25d2bfacd30a331fcff)
- [Codepen](http://codepen.io/sijad/pen/NRAAdj)
