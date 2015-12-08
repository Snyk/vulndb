## Overview

When using serve-static middleware version < 1.7.2 and it's configured to mount at the root, it creates an open redirect on the site.

_Source: [Node Security Project](https://nodesecurity.io/advisories/35)_

## Details

For example:

If a user visits `http://example.com//www.google.com/%2e%2e` they will be redirected to `//www.google.com/%2e%2e`, which some browsers interpret as `http://www.google.com/%2e%2e`.

## Remediation

  * Update to version 1.7.2 or greater (or 1.6.5 if sticking to the 1.6.x line).
  * Disable redirects if not using the feature with 'redirect: false' option and cannot upgrade.

## References
- https://nodesecurity.io/advisories/35
- https://github.com/expressjs/serve-static/issues/26
- https://www.owasp.org/index.php/Open_redirect
