## Overview
[`broccoli-closure`](https://www.npmjs.com/package/broccoli-closure)
broccoli-closure is a Closure compiler plugin for Broccoli.

broccoli-closure downloads binary resources over HTTP, which leaves it vulnerable to MITM attacks.  It may be possible to cause remote code execution (RCE) by swapping out the requested binary with an attacker controlled binary if the attacker is on the network or positioned in between the user and the remote server.

## Remediation
Upgrade to version `1.3.1` or greater.

## References
- [Github Commit](https://github.com/markuskobler/broccoli-closure-plugin/commit/94021ec4def22f28685e4f85a66a22176c115b16)
