## Overview
[`borgbackup`](http://pypi.python.org/pypi/borgbackup) is deduplicated, encrypted, authenticated and compressed backups.

Affected versions of the package are vulnerable to Access Restriction Bypass.
Incorrect implementation of access controls allows remote users to override repository restrictions in Borg servers. A user able to access a remote Borg SSH server is able to circumvent access controls post-authentication.

## Remediation
Upgrade `borgbackup` to version 1.1.3 or higher.

## References
- [GitHub PR](https://github.com/borgbackup/borg/blob/1.1.3/docs/changes.rst#version-113-2017-11-27)
- [GitHub Commit](https://github.com/borgbackup/borg/commit/ea0203bb0de557cd29de5ab0a0efe5f6015ca59d)
