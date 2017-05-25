## Overview
[`useragent`](https://www.npmjs.com/package/useragent) allows you to parse user agent string with high accuracy by using hand tuned dedicated regular expressions for browser matching.

Affected versions of this package are vulnerable to Regular Expression Denial of Service (ReDoS) attacks.
A malicious user could cause the server to block by editing the request headers with an arbitrarily long useragent string.

## Remediation
Update `useragent` to version 2.1.12 or higher.

## References
- [Github Commit](https://github.com/3rd-Eden/useragent/commit/64b15c9446a24abd9f52ed4ceb970f1a5cf790dd)
