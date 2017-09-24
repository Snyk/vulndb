## Overview
[`fs-git`](https://www.npmjs.com/package/fs-git) is fs module like api for a git repository.

Affected versions of the package are vulnerable to Arbitrary Command Injection due to insecurely using the `exec()` function without sanitizing the data input by a user.

## Remediation
Upgrade `fs-git` to version 1.0.2 or higher.

## References
- [Github Commit](https://github.com/vvakame/fs-git/commit/eb5f70efa5cfbff1ab299fa7daaa5de549243998)
