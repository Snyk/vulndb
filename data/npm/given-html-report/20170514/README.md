## Overview
[`given-html-report`](https://www.npmjs.com/package/given-html-report) is HTML Report generator for GivenJS.
Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

You can read more about `Resources downloaded over insecure protocol` on our [blog](https://snyk.io/blog/https-breaking-through/).

## Remediation
There is no fix version for `given-html-report`.

## References
- [Vulnerable code](https://github.com/janschaefer/GivenJS/blob/743c2773c00ad0822c65d2b7a5f337d3ee582538/given-html-report/package.json#L22)
