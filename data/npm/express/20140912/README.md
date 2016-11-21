## Overview
[`express`](https://www.npmjs.com/package/express) is a minimalist web framework.

Vulnerable versions of this package do not enforce the user's browser to set a specific charset in the content-type header content-type header while displaying 400 level response messages. This could be used by remote attackers to perform a cross-site scripting attack, by using non-standard encodings like UTF-7.

## Recommendations
Update express to `3.11.0` or higher for the 3.x versions or `4.5.0` or higher for the 4.x versions.

## References
- [Github release 3.11.0](https://github.com/expressjs/express/releases/tag/3.11.0)
- [Github release 4.5.0](https://github.com/expressjs/express/releases/tag/4.5.0)
