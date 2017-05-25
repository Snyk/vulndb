## Overview
[`npm`](https://www.npmjs.com/package/npm) is a package manager for JavaScript.
Affected versions of the package are vulnerable to Symlink attack due to predictable tmp folder names, which were named `/tmp/npm-$PID`. An attacker waiting for a process named `npm-` to load could then go to the folder and arbitrarily change the files in the tmp folder.

## Remediation
Upgrade `npm` to version 1.3.3 or higher.

## References
- [Github Issue](https://github.com/npm/npm/issues/3635)
- [Github Commit](https://github.com/npm/npm/commit/f4d31693)
- [OSS Security](http://www.openwall.com/lists/oss-security/2013/07/10/17)
