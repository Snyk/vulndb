## Overview
[`life_star`](https://www.npmjs.com/package/life_star) is a web server for [`Lively`](https://github.com/LivelyKernel/LivelyKernel).

A possible memory disclosure vulnerability exists when a value of type `number` is provided to the `buffer` and results in concatenation of uninitialized memory to the buffer collection. 
This is a result of unobstructed use of the `Buffer` constructor, who's [insecure default constructor increases the odds of memory leakage](https://snyk.io/blog/exploiting-buffer/).

You can read more about the insecure `Buffer` behavior [on our blog](https://snyk.io/blog/exploiting-buffer/).

Similar vulnerabilities were discovered in [bl](https://snyk.io/vuln/npm:bl:20160119), [request](https://snyk.io/vuln/npm:request:20160119), [mongoose](https://snyk.io/vuln/npm:mongoose:20160116), [ws](https://snyk.io/vuln/npm:ws:20160104) and [sequelize](https://snyk.io/vuln/npm:sequelize:20160115).

## References
- https://github.com/LivelyKernel/life_star/issues/8
- https://github.com/LivelyKernel/life_star/compare/0.8.4...0.8.6
- https://github.com/LivelyKernel/life_star/commit/b8d80b3209dcc26fc1f7784facaad0442b8c4218
