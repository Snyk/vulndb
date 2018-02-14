## Overview
Affected version of [`github.com/robbert229/jwt`](https://github.com/dgrijalva/jwt-go) are vulnerable to Side-channel Attacks.

The library uses the insecure, non-constant string comparison function `strings.Compare()`, instead of the time constant string comparison. As a result, the comparison will fail faster when the first characters in the HMAC are incorrect.
An attacker can use this difference to perform a timing attack, essentially allowing them to guess the HMAC one character at a time.

Similar vulnerability was previously found in [Google's Keyczar crytographic library](https://rdist.root.org/2009/05/28/timing-attack-in-google-keyczar-library/).

You can read more about timing attacks in Node.js on the [Snyk blog](https://snyk.io/blog/node-js-timing-attack-ccc-ctf/).


## References
- [GitHub Commit](https://github.com/robbert229/jwt/commit/ca1404ee6e83fcbafb66b09ed0d543850a15b654)
- [GitHub PR](https://github.com/robbert229/jwt/pull/13)
- [GitHub Issue](https://github.com/robbert229/jwt/issues/12)
- [Reddit Thread on RESTful session tokens](https://www.reddit.com/r/golang/comments/2lu55c/restful_session_token/cly7mu6/)
