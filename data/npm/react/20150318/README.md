## Overview
[`react`](https://www.npmjs.com/package/react) is React is a JavaScript library for building user interfaces..
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) due to the `createElement` method not validating the object, allowing a malicious user to pass a specially crafted JSON object and renders them as an element.

## Remediation
Upgrade `react` to version 0.14.0 or higher.

## References
- [More information a blog post by Daniel LeCheminant](http://danlec.com/blog/xss-via-a-spoofed-react-element)
- [Github Issue](https://github.com/facebook/react/issues/3473)
- [Github Changelogs](https://github.com/facebook/react/blob/master/CHANGELOG.md#notable-enhancements)
