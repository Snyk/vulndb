## Overview
[`git-fastclone`](https://rubygems.org/gems/git-fastclone) is a git command that uses reference repositories and threading to quickly and recursively clone repositories with many nested submodules.

Affected version of this package are vulnerable to Arbitrary Command Execution. `git-fastclone` used the `git-remote-ext` command, allowing a user to specify remote URLs.
An attacker could manipulate a user to run a recursive clone from a repository they control, allowing the attacker to run arbitrary commands. This attack works when cloning both local and remote repositories.

## Remediation
Upgrade to version `1.0.1` or greater.

## References
- [Hackerone](https://hackerone.com/reports/104465)
- [Github PR](https://github.com/square/git-fastclone/pull/2)
- [Github Commit](https://github.com/square/git-fastclone/pull/2/commits/a8a33f187214185b885a10bcfe2527c74da84a8c)
