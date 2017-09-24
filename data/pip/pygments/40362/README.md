## Overview
[`pygments`](https://pypi.python.org/pypi/pygments) is a syntax highlighting package written in Python.

The `FontManager._get_nix_font_path` function in formatters/img.py in Pygments 1.2.2 through 2.0.2 allows remote attackers to execute arbitrary commands via shell metacharacters in a font name.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-8557)
- [Bitbucket PR](https://bitbucket.org/birkenfeld/pygments-main/pull-requests/501/fix-shell-injection-in/diff)
- [Bitbucket Commit #1](https://bitbucket.org/birkenfeld/pygments-main/commits/0036ab1c99e256298094505e5e92fdacdfc5b0a8)
- [Bitbucket Commit #2](https://bitbucket.org/birkenfeld/pygments-main/commits/6b4baae517b6aaff7142e66f1dbadf7b9b871f61?at=default)
