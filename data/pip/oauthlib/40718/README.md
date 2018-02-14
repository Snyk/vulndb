## Overview
Affected versions of [`oauthlib`](https://pypi.python.org/pypi/oauthlib) are vulnerable to Information Exposure Through Debug Log Files which happend because the debug log printed password to the log files.

## Remediation
Upgrade `oauthlib` to version 0.7.0 or higher.

## References
- [GitHub Changelog](https://github.com/idan/oauthlib/blob/master/CHANGELOG.rst#070-2014-10-27)
- [Github Issue](https://github.com/idan/oauthlib/issues/256)
- [Github Commit](https://github.com/idan/oauthlib/commit/fef1f7987cc6298e744b7d4290e3fc9a9701831b)
