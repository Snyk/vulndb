## Overview
[`Sanic`](http://pypi.python.org/pypi/Sanic) is a microframework based on uvloop, httptools, and learnings of flask.

Affected versions of the package are vulnerable to Directory Traversal.
Sanic before 0.5.1 allows reading arbitrary files with directory traversal, as demonstrated by the `/static/..%2f` substring.

## Remediation
Upgrade `sanic` to version 0.5.1 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-16762)
- [GitHub PR](https://github.com/channelcat/sanic/pull/635)
- [GitHub Issue](https://github.com/channelcat/sanic/issues/633)
- [GitHub Commit](https://github.com/channelcat/sanic/commit/18829e648a26d947b7e441a9d7d012a24b0adf48)
