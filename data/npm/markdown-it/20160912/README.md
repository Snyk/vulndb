## Overview
[markdown-it](https://www.npmjs.com/package/markdown-it) is a pluggable markdown parser used for rendering markdown content to html. Affected versions of the package allowed the use of `data:` URIs for all mime types by default potentially opening a door for Cross-site Scripting (XSS) attacks. 

The fix was introduced in version `4.1.0`, whitelisting the following four data types `image/gif`, `image/png`, `image/jpeg` and `image/webp` while blocking the others by default.

## Details
Data URIs enable embedding small files in line in HTML documents, provided in the URL itself.
Attackers can craft malicious web pages containing either HTML or script code that utilizes the data URI scheme, allowing them to bypass access controls or steal sensitive information.

An example of data URI used to deliver javascript code. The data holds `<script>alert('XSS')</script>` tag in base64 encoded format.
```html
[xss link](data:text/html;base64,PHNjcmlwdD5hbGVydCgnWFNTJyk8L3NjcmlwdD4K)
```

## Remediation
Upgrade to `markdown-it` version 4.1.0 or newer.

## References
- https://github.com/markdown-it/markdown-it/blob/master/CHANGELOG.md#410--2015-03-31
- https://github.com/markdown-it/markdown-it/compare/4.0.3...4.1.0
- https://github.com/markdown-it/markdown-it/commit/f76d3beb46abd121892a2e2e5c78376354c214e3
