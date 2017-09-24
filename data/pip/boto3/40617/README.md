## Overview
[`boto3`](https://pypi.python.org/pypi/boto3) is the AWS SDK for Python.

Affected versions of this package are vulnerable to Information Exposure due to logging all of the bytes uploaded when the logger is set to the `INFO` level.

## References
- [GitHub Issue](https://github.com/boto/boto3/issues/1017)
