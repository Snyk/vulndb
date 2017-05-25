## Overview
[`git-fastclone`](https://rubygems.org/gems/git-fastclone) is a git command that uses reference repositories and threading to quickly and recursively clone repositories with many nested submodules.

## Details
git-fastclone before 1.0.5 passes user modifiable strings directly to a shell command. An attacker can execute malicious commands by modifying the strings that are passed as arguments to `cd` and `git clone` commands in the library.

## Remediation
Upgrade to version `1.0.5` or greater.

## References
- [Hackerone](https://hackerone.com/reports/105190)
- [GitHub PR](https://github.com/square/git-fastclone/pull/5)
- [GitHub Commit #1](https://github.com/square/git-fastclone/commit/ac3dd9871ff1722b6b4f3c6c7a1250b81a08644f)
- [GitHub Commit #2](https://github.com/square/git-fastclone/commit/9c6a28e0a2c8accc7bf251a17cc180196f5075f4)
