## Overview
Affected version of [`github.com/github/hub`](https://github.com/github/hub) are vulnerable to Arbitrary File Overwrite.
The am function in lib/hub/commands.rb in hub before 1.12.1 allows local users to overwrite arbitrary files via a symlink attack on a temporary patch file.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-0177)
- [GitHub Commit](https://github.com/github/hub/commit/016ec99d25b1cb83cb4367e541177aa431beb600)
