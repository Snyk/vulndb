## Overview
[`http-signature`](https://www.npmjs.com/package/http-signature) is a Reference implementation of Joyent's HTTP Signature scheme.
Affected versions of the package are vulnerable to header forgery, due to the header names not being signed. An attacker could switch the header list order and header value order ending up wit the same signature for two separate requests.

## Remediation
Upgrade `http-signature` to version 0.10.0 or higher.

## References
- [Github Issue](https://github.com/joyent/node-http-signature/issues/10)
- [Github PR](https://github.com/joyent/node-http-signature/pull/11)
- [Github Commit](https://github.com/joyent/node-http-signature/commit/658961f638e4418678e70c5794f7f5b03ff43830)
