## Overview
[`org.kohsuke:libpam4j`](https://kohsuke.org) is a Java binding for libpam.

Affected versions of the package are vulnerable to Access Restriction Bypass.
A malicious user with a valid password for a disabled account can bypass the restrictions and get access to sensitive information.

## Remediation
There is no fix version for `libpam4j`.

## References
- [Debian Security tracker](https://security-tracker.debian.org/tracker/CVE-2017-12197)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id&#x3D;1503103)
- [Github Issue](https://github.com/kohsuke/libpam4j/issues/18)
- [Github Commit](https://github.com/letonez/libpam4j/commit/84f32f4001fc6bdcc125ccc959081de022d18b6d)
