## Overview
[`restify`](https://www.npmjs.com/package/restify) is a REST framework.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) when routing to a non-existant url (404 error), it is possible for a malicious user to inject script tags into the url and force some browsers to execute the code in the tags.

For more information on XSS vulnerabilities, see our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `restify` to version 4.1.0 or higher.

## References
- [Github Issue](https://github.com/restify/node-restify/issues/1018)
- [Github PR #1](https://github.com/restify/node-restify/pull/1031)
- [Github PR #2](https://github.com/restify/node-restify/pull/1032)
- [Github Commit](https://github.com/restify/node-restify/commit/a015067232ad62aa035675dc63a46dce31fed3f3)
