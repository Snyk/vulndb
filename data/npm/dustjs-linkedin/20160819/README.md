## Overview
[`dustjs-linkedin`](https://www.npmjs.com/package/dustjs-linkedin) is a Javascript templating engine designed to run asynchronously on both the server and the browser.

Dust.js uses Javascript's `eval()` function to evaluate the "if" statement conditions. The input to the function is sanitized by escaping all potentially dangerous characters.

However, if the variable passed in is an array, no escaping is applied, exposing an easy path to code injection. The risk of exploit is especially high given the fact `express`, `koa` and many other Node.js servers allow users to force a query parameter to be an array using the `param[]=value` notation.

## Remediation
Upgrade to version `2.6.0` or greater.

## References
- https://github.com/linkedin/dustjs/pull/534/commits/884be3bb3a34a843e6fb411100088e9b02326bd4
- https://github.com/linkedin/dustjs/pull/534
- https://github.com/linkedin/dustjs/issues/741
- https://artsploit.blogspot.co.il/2016/08/pprce2.html


