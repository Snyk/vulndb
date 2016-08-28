## Overview
[`cli`](https://www.npmjs.com/package/cli) is an npm package used for rapidly building command line apps. 

When used in `daemon` mode, the library makes insecure use of two files in the `/tmp/` folder: `/tmp/<app-name>.pid` and `/tmp/<app-name>.log`. These allow an attacker to overwrite files they typically cannot access, but that are accessible by the user running the CLI-using app. This is possible since the `/tmp/` folder is (typically) writeable to all system users, and because the names of the files in question are easily predicted by an attacker.

Note that while this is a real vulnerability, it relies on functionality (`daemon` mode) which is only supported in very old Node versions (0.8 or older), and so is unlikely to be used by most `cli` users. To avoid any doubt, the fixed version (1.0.0) removes support for this feature entirely. 

## Details
For example, assume user _victim_ occasionally runs a CLI tool called `cli-tool`, which uses the `cli` package.
If an attacker gains write access to the `/tmp/` folder of that machine (but not the higher permissions _victim_ has), they can create the symbolic link `/tmp/cli-tool.pid -> /home/victim/important-file`. When _victim_ runs `cli-tool`, the `important-file` in victim's root directory will be nullified. If the CLI tool is run as root, the same can be done to nullify `/etc/passwd` and make the system unbootable. 

Note that popular CLI tools have no reason to mask their names, and so attackers can easily guess a long list of tools victims may run by checking the `cli` package [dependents](https://www.npmjs.com/browse/depended/cli).

## Remediation
Upgrade `cli` to version `1.0.0` or greater, which disables the affected feature.

From the fix release notes:
```
This feature relies on a beta release (e.g. version 0.5.1) of a Node.js
module on npm--one that was superseded by a stable (e.g. version 1.0)
release published three years ago [2]. Due to a build-time dependency on
the long-since deprecated `node-waf` tool, the module at that version
can only be built for Node.js versions 0.8 and below.

Given this, actual usage of this feature is likely very limited. Remove
it completely so the integrity of this module's core functionality can
be verified.
```

## References
[1] https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=809252
[2] https://github.com/node-js-libs/cli/commit/fd6bc4d2a901aabe0bb6067fbcc14a4fe3faa8b9
