## Overview
[`koa-static-cache`](https://www.npmjs.com/package/koa-static-cache) is Static cache for koa.

Affected versions of the package are vulnerable to Directory Traversal. When in dynamic mode, a malicious user can traverse through the servers files, by entering `%2E%2E/` into the url, allowing the attacker to obtain the contents of any file on the server's filesystem.

## Remediation
Upgrade `koa-static-cache` to versions `4.1.1`, `5.1.1` or higher.

## References
- [Github PR](https://github.com/koajs/static-cache/pull/66)
- [Github History](https://github.com/koajs/static-cache/blob/master/HISTORY.md#511--2017-06-13)
- [Github Commit](https://github.com/koajs/static-cache/commit/b69e4f66e775ecd6c0cc0f311669d21a289c9ccf)
