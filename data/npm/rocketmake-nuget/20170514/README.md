## Overview
[`rocketmake-nuget`](https://www.npmjs.com/package/rocketmake-nuget)
Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol.  Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

You can read more about `Resources downloaded over insecure protocol` on our [blog](https://snyk.io/blog/https-breaking-through/).

Thanks to [Liang Gong](https://github.com/JacksonGL) for disclosing this vulnerability!

## Remediation
There is no fix version for `rocketmake-nuget`.

## References
- The vulnerability is in lines 17-25 of the `index.js` file.
