## Overview
[`cheerio`](https://www.npmjs.com/package/cheerio) is an implementation of core jQuery designed specifically for the server. Affected versions of this package are vulnerable to [Cross-site Scripting (XSS)](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)) attacks via assigned attributes.

The vulnerability was reported by [Ben Atkin](https://github.com/benatkin)

## Example
>When assigning attributes, there is no protection against XSS:
```
function xss() {
  var $ = require('cheerio').load('<a>GitHub</a>');
  $('a').attr('href', 'http://github.com/"><script>alert("XSS!")</script><br');
  return $.html();
}
```
>xss() returns:
```
<a href = "http://github.com/"><script>alert("XSS!")</script><br">GitHub</a>
```

## Recommendation
Upgrade `cheerio` to version 0.9.0 or greater.

## References
- https://github.com/cheeriojs/cheerio/issues/49
- https://github.com/cheeriojs/cheerio/pull/71
- https://github.com/cheeriojs/cheerio/pull/71/commits/1e2b3240f11b1a7fa3f0bc9009f18a5d7b59bae1
- https://github.com/cheeriojs/cheerio/commit/70622480354a3144aad6986d93f0bf48c1d882bf
