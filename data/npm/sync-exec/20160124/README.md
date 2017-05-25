## Overview
[`sync-exec`](https://www.npmjs.com/package/sync-exec) is an fs.execSync replacement for node <0.12.

Affected versions of this package use tmp directories in an insecure way. The file to create will allways return `true`, regardess if the directory already exists and/or belongs to another user. Any user on the server may read the contents of this tmp file and may expose confidential information to an attacker.

## Remediation
There is no fix version for `sync-exec`.

## References
- [GitHub Issue](https://github.com/gvarsanyi/sync-exec/issues/17)
