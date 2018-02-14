## Overview
[`github.com/remind101/empire`](https://github.com/remind101/empire) is a control layer on top of Amazon EC2 Container Service (ECS) that provides a Heroku like workflow.

Affected versions of the package are vulnerable to Man-in-the-Middle (MitM) attacks. The `X-Forwarded-For` header was not blacklisted and it was possible to spoof ip addresses.

## Remediation
Upgrade `github.com/remind101/empire` to commit `0c299f3` from October 4th, 2017 or newer.

## References
- [Github PR](https://github.com/remind101/empire/pull/1109)
- [Github Issue](https://github.com/remind101/empire/commit/0c299f3fe396112f968f61c3b02aea76170e678e)
- [Github Commit](https://github.com/remind101/empire/commit/0c299f3fe396112f968f61c3b02aea76170e678e)
