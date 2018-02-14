## Overview
[`marked`](https://www.npmjs.com/package/marked) is a markdown parser and compiler used for rendering markdown content to html.

Affected versions of the package are vulnerable to Cross-site Scripting (XSS) attacks.

## Details
Browsers support both lowercase and uppercase x in hexadecimal form of HTML character entity, but marked [unescaped only lowercase](https://github.com/chjj/marked/blob/v0.3.7/lib/marked.js#L1096-L1108).

This may allow an attacker to create a link with javascript code.

For example:
```js
var marked = require('marked');
marked.setOptions({
  renderer: new marked.Renderer(),
  sanitize: true
});

text = `
lower[click me](javascript&#x3a;...)lower
upper[click me](javascript&#X3a;...)upper
`;

console.log(marked(text));
```

will render the following:

```html
<p>lowerlower
upper<a href="javascript&#X3a;...">click me</a>upper</p>

```

## Remediation
Upgrade `marked` to version 0.3.9 or higher.

## References
- [GitHub Issue](https://github.com/chjj/marked/issues/925)
- [GitHub Issue - Release 0.3.9 status](https://github.com/chjj/marked/pull/958)
