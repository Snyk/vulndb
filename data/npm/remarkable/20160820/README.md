## Overview
[`remarkable`](https://www.npmjs.com/package/remarkable) is markdown parser.
Affected versions of the package are allowed the use of `data:` URIs for all mime types by default potentially opening a door for Cross-site Scripting (XSS) attacks.

## Details
Data URIs enable embedding small files in line in HTML documents, provided in the URL itself.
Attackers can craft malicious web pages containing either HTML or script code that utilizes the data URI scheme, allowing them to bypass access controls or steal sensitive information.

An example of data URI used to deliver javascript code. The data holds `<script>alert('XSS')</script>` tag in base64 encoded format.
```html
[xss link](data:text/html;base64,PHNjcmlwdD5hbGVydCgnWFNTJyk8L3NjcmlwdD4K)
```

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `remarkable` to version 1.7.0 or higher.

## References
- [Github PR](https://github.com/jonschlinkert/remarkable/pull/228)
- [Github Issue](https://github.com/jonschlinkert/remarkable/issues/227)
- [Github Commit](https://github.com/jonschlinkert/remarkable/commit/49e24e8f2a431c095ddbb74ecb67cf1cf8f88c47)
