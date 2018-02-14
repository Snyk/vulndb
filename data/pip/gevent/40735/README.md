## Overview
Affected versions of [`gevent`](https://pypi.python.org/pypi/gevent) are vulnerable to Information Exposure.

The pywsgi `environ` dict print the entire WSGI environment by default which could have lead to information Exposure.

## Remediation
Upgrade `gevent` to version 1.2a1 or higher.

## References
- [GitHub Changelog](https://github.com/gevent/gevent/blob/master/CHANGES.rst#security)
- [Github PR #1](https://github.com/gevent/gevent/pull/779)
- [Github PR #2](https://github.com/gevent/gevent/pull/781)
- [Github Commit](https://github.com/gevent/gevent/commit/4fe26b0d47568744b101a56b475b226efae08b1f)
