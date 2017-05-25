## Overview
[`marked`](https://www.npmjs.com/package/marked) is a markdown parser and compiler used for rendering markdown content to html.
Affected versions of the package allowed the use of `data:` URIs for all mime types by default potentially opening a door for Cross-site Scripting (XSS) attacks.

## Details
Data URIs enable embedding small files in line in HTML documents, provided in the URL itself.
Attackers can craft malicious web pages containing either HTML or script code that utilizes the data URI scheme, allowing them to bypass access controls or steal sensitive information.

An example of data URI used to deliver javascript code. The data holds `<script>alert('XSS')</script>` tag in base64 encoded format.
```html
[xss link](data:text/html;base64,PHNjcmlwdD5hbGVydCgnWFNTJyk8L3NjcmlwdD4K)
```

## Remediation
The fix is merged to the master branch but not yet published to npm. We recommend patching it using [Snyk wizard](https://snyk.io/docs/using-snyk/#wizard).

## References
- [GitHub Commit](https://github.com/chjj/marked/commit/cd2f6f5b7091154c5526e79b5f3bfb4d15995a51)
