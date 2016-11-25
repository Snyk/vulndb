## Overview
[`jquery`](https://www.npmjs.com/package/jquery) is JavaScript library for DOM operations.
Affected versions of the package are vulnerable to a DOM based Cross-site Scripting (XSS) attack due to using the `text()` function inside the `after()` function.

## Remediation
Upgrade `jquery` to version 1.6.2 or higher.

## References
- http://seclists.org/fulldisclosure/2014/Sep/10
- https://bugzilla.redhat.com/show_bug.cgi?id&#x3D;1136683
