## Overview
[`jquery-mobile`](https://www.npmjs.com/package/jquery-mobile) is a touch-optimized web framework for smartphones and Tablets.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) via the `location.href` decoding the `user:password@` part of the url.


## Remediation
Upgrade `jquery-mobile` to version 1.2.0 or higher.


## References
- [JQuery mobile changelog](http://jquerymobile.com/changelog/1.2.0/)
- [Github Issue](https://github.com/jquery/jquery-mobile/issues/4787)
- [Github Commit](https://github.com/jquery/jquery-mobile/commit/370413072db4fd8ee0da4455d9a08abc9ef5ba24)
