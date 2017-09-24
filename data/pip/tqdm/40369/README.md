## Overview
[`tqdm`](https://pypi.python.org/pypi/tqdm) is a Fast, Extensible Progress Meter.

Affected versions of this package are vulnerable to Arbitrary Code Execution due to using git insecurely. When importing `tqdm`, the `tqdm._version` module will run `git log -n 1 --oneline` in order to check if the user is running a pre-released version. An attacker can craft a repository with a malicious git log in the current working directory.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-10075)
- [GitHub Issue](https://github.com/tqdm/tqdm/issues/328)
- [GitHub PR](https://github.com/tqdm/tqdm/pull/330)
- [GitHub Commit](https://github.com/tqdm/tqdm/commit/7996430e92ca0babec510fcf18d62c9f9c4e6b4d)
