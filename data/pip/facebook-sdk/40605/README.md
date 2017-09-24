## Overview
[`facebook_sdk`](https://pypi.python.org/pypi/facebook_sdk) is a This client library is designed to support the Facebook Graph API and the official Facebook JavaScript SDK, which is the canonical way to implement Facebook authentication.
facebook-sdk is vulnerable to cross-site request forgery (CSRF). It does not support the state property in auth urls for CSRF detection, allowing CSRF attacks based on state mutation.

## References
- [GitHub PR](https://github.com/mobolic/facebook-sdk/pull/39)
- [GitHub Commit](https://github.com/mobolic/facebook-sdk/commit/3fc17fa91feacba3b2188dcd6033962dd7c89326)
