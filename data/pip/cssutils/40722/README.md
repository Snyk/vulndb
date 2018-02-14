## Overview
Affected versions of [`cssutils`](https://pypi.python.org/pypi/cssutils) are vulnerable to Directory Traversal.
`cssutils.resolveImports` uses `sheet.href` and showing the full path to a sheet.

## Remediation
Upgrade `cssutils` to version 0.9.6a2 or higher.

## References
- [BitBucket Changelog](https://bitbucket.org/cthedot/cssutils/src/1b9008927350cf34fee1d05622b03e734bc4fcf5/CHANGELOG.txt?at=default&fileviewer=file-view-default#CHANGELOG.txt-497)
- [BitBucket Commit #1](https://bitbucket.org/cthedot/cssutils/commits/4077971c214b4f2eb4889a3ff0cb940e9e5d26a5?at=TAG_0.9.6a2)
- [BitBucket Commit #2](https://bitbucket.org/cthedot/cssutils/commits/4ff52ad59c129e908a9250fd00cfed1aaf9d15f8?at=TAG_0.9.6a2)
