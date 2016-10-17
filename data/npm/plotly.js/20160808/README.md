## Overview
[`plotly.js`](https://www.npmjs.com/package/plotly.js) is a high-level, declarative charting library.

Affected versions of the package allow attackers to trick an unsuspecting user into viewing a specially crafted plot on a site that uses `plotly.js`. The vulnerability would have allowed the attacker to retrieve authentication tokens and perform actions on behalf of the user.

## Details
`plot.ly` is rendering SVG objects inside the DOM. `href` tags are converted to the xlink:href attriubute on the <a> tag. This allowed an attacker to break out into the DOM and inject a payload.

For more information, see Jared's [post](https://acloudtree.com/2016-08-09-how-i-hacked-plotly-by-exploiting-a-svg-vulnerability-in-plotlyjs/) explaining the issue very well.

## Remediation
Upgrade to `plotly.js` version 1.16.0 or newer.

## References
- https://acloudtree.com/2016-08-09-how-i-hacked-plotly-by-exploiting-a-svg-vulnerability-in-plotlyjs/
- http://help.plot.ly/security-advisories/2016-08-08-plotlyjs-xss-advisory/
- https://github.com/plotly/plotly.js/pull/736
- https://github.com/plotly/plotly.js/commit/d5885957f72e21a25782dc28e2028ffe8debf5ef
