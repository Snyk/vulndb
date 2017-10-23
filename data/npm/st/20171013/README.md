## Overview
[`st`](https://www.npmjs.com/package/st) is a module for serving static files.

Affected versions of this package are vulnerable to Open Redirect. A malicious user could send a specially crafted request, which would automatically redirect the request to another domain, controlled by the attacker.

**Note:**  `st` will only redirect if requests are served from the root(`/`) and not from a subdirectory

## References
- [GitHub Commit](https://github.com/isaacs/st/commit/579960c629f12a27428e2da84c54f517e37b0a16)
