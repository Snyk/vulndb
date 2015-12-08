## Overview

Connect is a stack of middleware that is executed in order in each request.

The "methodOverride" middleware allows the http post to override the method of the request with the value of the ```_method``` post key or with the header "x-http-method-override".

Because the user post input was not checked, req.method could contain any kind of value. Because the req.method did not match any common method VERB, connect answered with a 404 page containing the "Cannot [method] [url]" content. The method was not properly encoded for output in the browser.

_Source: [Node Security Project](https://nodesecurity.io/advisories/3)_

## Details

**Example**

```
~ curl "localhost:3000" -d "_method=<script src=http://nodesecurity.io/xss.js></script>"
Cannot <SCRIPT SRC=HTTP://NODESECURITY.IO/XSS.JS></SCRIPT> /
```

**Mitigation factors**

Update to the newest version of Connect or disable methodOverride. It is not possible to avoid the vulnerability if you have enabled this middleware in the top of your stack.

**History**

- (2013-06-27) [Bug reported](https://github.com/senchalabs/connect/issues/831)
- (2013-06-27) [First fix: escape req.method output](https://github.com/senchalabs/connect/commit/277e5aad6a95d00f55571a9a0e11f2fa190d8135)
- (2013-06-27) [Second fix: whitelist](https://github.com/senchalabs/connect/commit/126187c4e12162e231b87350740045e5bb06e93a)

## References
- https://nodesecurity.io/advisories/3
