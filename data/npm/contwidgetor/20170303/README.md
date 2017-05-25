## Overview
[`contwidgetor`](https://www.npmjs.com/package/contwidgetor) is a contributions widget for both bitbucket and github.

Affected versions of the package use the insecure SHA-1 in the authentication method. It is possible to duplicate the hash and should not be used in security sensitive instances.

## Remediation
There is no fix version for `contwidgetor`.

## References
- [Github Issue](https://github.com/jrm2k6/contwidgetor/issues/4)
- [Google Security Blog](https://security.googleblog.com/2017/02/announcing-first-sha1-collision.html?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+GoogleOnlineSecurityBlog+%28Google+Online+Security+Blog%29)
- [Vulnerable Code](https://github.com/jrm2k6/contwidgetor/blob/13b302d1d4b82b9ea7a4e226afa86a74f4d92ea3/src/data/bitbucket-commits-fetcher.js#L14)
