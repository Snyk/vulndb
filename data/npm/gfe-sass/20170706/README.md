## Overview
[`gfe-sass`](https://www.npmjs.com/package/gfe-sass) is a fork from node-sass, gfe use only.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

You can read more about `Resources downloaded over insecure protocol` on our [blog](https://snyk.io/blog/https-breaking-through/).
