## Overview
[`hub`](https://rubygems.org/gems/hub) is a command line utility which can used on its own or as a `git` wrapper.

Affected versions of the package are vulnerable to File overwrite.
The am function in lib/hub/commands.rb in hub before 1.12.1 allows local users to overwrite arbitrary files via a symlink attack on a temporary patch file.

## Remediation
Upgrade `hub` to version 1.12.1 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2014-0177)
- [Github Commit](https://github.com/github/hub/commit/016ec99d25b1cb83cb4367e541177aa431beb600)
