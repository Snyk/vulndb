## Overview
The validator module for Node.js contains functionality meant to filter potential XSS attacks (a filter called xss). A method of
bypassing the filter via an encoded URL has been publicly disclosed. In general, because the function’s filtering is blacklist-based it is likely that other bypasses will be discovered in the future. Developers are encouraged not to use the xss filter function in this package.

_Source: [Node Security Project](https://nodesecurity.io/advisories/43)_

### Details
The xss() function removes the word "javascript" when contained inside an attribute. However, it does not properly handle cases where
characters have been hex-encoded. As a result, it is possible to build an input that bypasses the filter but which the browser will accept as valid JavaScript.

For example, browsers interpret <a href="jav&#x61;script:...">abc</a> as <a href="javascript:...">abc</a>.

## Remediation
Upgrade to the latest version of this library. However, it should be noted that the fix for this vulnerability was to remove the xss filter functionality. Seek another library to provide proper output encoding.

## References
- https://nodesecurity.io/advisories/43
- https://github.com/chriso/validator.js/issues/181
