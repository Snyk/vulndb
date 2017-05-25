## Overview
[`markdown-it`](https://www.npmjs.com/package/markdown-it) is a modern pluggable markdown parser.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) via Class Injection.

## Details
The markdown-it renderer blindly appends the character class to the `language-` part of the tag. If there is a space in the language name, it'll be rendered into two separate classes.
```
\`\`\`
foo&#x20;bar
code
\`\`\`
```
will be rendered into
```
<pre><code style="language-foo bar">
code
</code></pre>
```
A malicious user can attach an arbitrary class to the `code` tag.

## Remediation
Upgrade `markdown-it` to version 4.3.1 or higher.

## References
- [GitHub Issue](https://github.com/markdown-it/markdown-it/issues/128)
- [GitHub Commit](https://github.com/markdown-it/markdown-it/commit/019bbda5f5ee8b7d00f2633340aef3b0d000e3f1)
