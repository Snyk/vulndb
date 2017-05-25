## Overview
[`hubl-server`](https://www.npmjs.com/package/hubl-server) is a Wrapper for the HubL Development Server.
Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

You can read more about `Resources downloaded over insecure protocol` on our [blog](https://snyk.io/blog/https-breaking-through/).

## Remediation
There is no fix version for `hubl-server`.
