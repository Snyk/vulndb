## Overview
[`plotly.js`](https://www.npmjs.com/package/plotly.js) is a high-level, declarative charting library.

Affected versions of the package allowed the style attribute to be manipulated in the tag inside the embedded `svg` making them vulnerable to a css injection which allowed for tracking images to be embedded and leak information to an external domain.

## Details
For more information, see Jared's [post](https://acloudtree.com/2016-08-09-how-i-hacked-plotly-by-exploiting-a-svg-vulnerability-in-plotlyjs/) explaining the issue very well.

## Remediation
Upgrade to `plotly.js` version 1.16.0 or newer.

## References
- https://snyk.io/vuln/npm:plotly.js:20160808
- https://acloudtree.com/2016-08-09-how-i-hacked-plotly-by-exploiting-a-svg-vulnerability-in-plotlyjs/
- http://help.plot.ly/security-advisories/2016-08-08-plotlyjs-xss-advisory/
- https://github.com/plotly/plotly.js/pull/736
- https://github.com/plotly/plotly.js/commit/d5885957f72e21a25782dc28e2028ffe8debf5ef
