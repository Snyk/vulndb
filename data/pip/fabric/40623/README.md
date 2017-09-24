## Overview
[`fabric`](https://pypi.python.org/pypi/fabric) is a Fabric is a simple, Pythonic tool for remote execution and deployment.
Fabric is vulnerable to information disclosure. When uploading templates using the `upload_template()` function, if the intended destination is invalid, the file ends up world-readable in the home folder.

## References
- [GitHub Issue](https://github.com/fabric/fabric/issues/1341)
