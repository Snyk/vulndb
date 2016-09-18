## Overview
[`crossbow-lang`](https://www.npmjs.com/package/crossbow-lang) is an unmaintaned fork of [`dustjs-linkedin`](https://www.npmjs.com/package/dustjs-linkedin), a Javascript templating engine designed to run asynchronously on both the server and the browser. It is vulnerable to the same [Code Injection vulnerability](https://snyk.io/vuln/npm:dustjs-linkedin:20160819) as Dust.js

Dust.js uses Javascript's `eval()` function to evaluate the "if" statement conditions. The input to the function is sanitized by escaping all potentially dangerous characters.

However, if the variable passed in is an array, no escaping is applied, exposing an easy path to code injection. The risk of exploit is especially high given the fact `express`, `koa` and many other Node.js servers allow users to force a query parameter to be an array using the `param[]=value` notation.

## Remediation
Latest release (`v1.0.0`) is vulnerable, so we suggest to avoid using it altogether, until a patch is made available.

## References
- https://snyk.io/vuln/npm:dustjs-linkedin:20160819

