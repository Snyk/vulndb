## Overview
[`org.apache.storm:storm`](https://storm.apache.org/) is a free and open source distributed realtime computation system.

Affected versions of the package are vulnerable to Arbitrary Code Execution.
It was found that under some situations and configurations of Apache Storm 1.x before 1.0.4 and 1.1.x before 1.1.1, it is theoretically possible for the owner of a topology to trick the supervisor to launch a worker as a different, non-root, user. In the worst case this could lead to secure credentials of the other user being compromised.

## Remediation
Upgrade `org.apache.storm:storm` to version 1.0.4, 1.1.1 or higher.

## References
- [Openwall](http://www.openwall.com/lists/oss-security/2017/08/09/8)
- [Github Changelog](https://github.com/apache/storm/blob/v1.1.1/CHANGELOG.md#111)
