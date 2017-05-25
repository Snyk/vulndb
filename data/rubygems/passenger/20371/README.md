## Overview
[`passenger`](https://rubygems.org/gems/passenger) is a modern web server and application server for Ruby, Python and Node.js, optimized for performance, low memory usage and ease of use.

Affected versions of the package are vulnerable to Privilege Escalation, due to insecure tmp file names. If an attacker has access to the system, they could conduct a symlink attack in the `/tmp` files and overwrite these files when the `passenger-install-nginx-module` was run, resulting in the attacker gaining the privileges of the user running the task.

## Remediation
Upgrade `passenger` to version 5.1.0 or higher.

## References
- [GitHub PR](https://blog.phusion.nl/2017/01/10/passenger-5-1-1/)
- [GitHub Issue](https://github.com/phusion/passenger/blob/stable-5.1/CHANGELOG#L79)
- [GitHub Commit](https://github.com/phusion/passenger/commit/e5b4b0824d6b648525b4bf63d9fa37e5beeae441)
