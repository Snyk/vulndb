## Overview
[`selenium-download`](https://www.npmjs.com/package/selenium-download) allows downloading of latest selenium standalone server and chromedriver.
Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol.

## Remediation
Upgrade `selenium-download` to version 2.0.7 or higher.

## References
- [GitHub PR](https://github.com/groupon/selenium-download/pull/32)
- [GitHub Commit]( https://github.com/groupon/selenium-download/commit/1957ca79707b9bee224b222500ceb250f736b93b)
