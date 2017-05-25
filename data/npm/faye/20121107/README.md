## Overview
[`faye`](https://www.npmjs.com/package/faye) is a simple pub/sub messaging for the web.
Affected versions of the package are vulnerable to Man-In-The-Middle attacks due to insecure defaults.
By default, `faye` used an insecure cipher, allowing attackers to gain access to SSL encrypted packets. This attack is also known as the BEAST attack.

You can read more about insecure defaults on our [blog](https://snyk.io/blog/mongodb-hack-and-secure-defaults/)

## Remediation
Upgrade `faye` to version 0.8.9 or higher.

## References
- [GitHub Issue](https://github.com/faye/faye/issues/171)
- [GitHub Commit](https://github.com/faye/faye/commit/e407e08c68dd885896552b59ce65503be85030ad)
- [](https://vnhacker.blogspot.co.il/2011/09/beast.html)
