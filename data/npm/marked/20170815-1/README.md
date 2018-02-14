## Overview
[`marked`](https://www.npmjs.com/package/marked) is a markdown parser and compiler used for rendering markdown content to html.

Affected versions of the package are vulnerable to Cross-site Scripting (XSS) attacks.

## Details
When mangling is disabled via option `mangle`, marked doesn't escape target `href`. This may allow an attacker to inject arbitrary `html-event` into resulting a tag.

For example:
```js
var marked = require('marked');
marked.setOptions({
  renderer: new marked.Renderer(),
  sanitize: true,
  mangle: false
});

text = `
<bar"onclick="alert('XSS')"@foo>
`;

console.log(marked(text));
```

will render:

```html
<p><a href="mailto:bar"onclick="alert('XSS')"@foo">bar"onclick="alert('XSS')"@foo</a></p>
```

## Remediation
Upgrade `marked` to version 0.3.9 or higher.

## References
- [GitHub Issue](https://github.com/chjj/marked/issues/926)
- [GitHub Issue - Release 0.3.9 status](https://github.com/chjj/marked/pull/958)
