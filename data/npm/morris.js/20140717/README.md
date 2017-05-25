## Overview
[`morris.js`](https://www.npmjs.com/package/morris.js) is a very simple API for drawing line, bar, area and donut charts.
Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks. The row label is concatenated without filter and could contain any value.

## Remediation
There is no fix version for `morris.js`. A pull request with a [fix has been merged](https://github.com/morrisjs/morris.js/commit/1c66cfc4ac7b23d324f131bec7739265887e30fc) on GitHub, but not published to npm.

## References
- [GitHub PR](https://github.com/morrisjs/morris.js/pull/464)
- [Github Commit](https://github.com/morrisjs/morris.js/commit/1c66cfc4ac7b23d324f131bec7739265887e30fc)
