## Overview

Affected versions of [`AntiXSS`](https://www.nuget.org/packages/AntiXSS) are vulnerable to Cross-site Scritping (XSS).

The Microsoft Anti-Cross Site Scripting (AntiXSS) Library 3.x and 4.0 does not properly evaluate characters after the detection of a Cascading Style Sheets (CSS) escaped character, which allows remote attackers to conduct cross-site scripting (XSS) attacks via HTML input, aka "AntiXSS Library Bypass Vulnerability."

## Remediation
Upgrade `AntiXSS` to version 4.2.1 or higher.

## References
- [Microsoft Security Advisory](http://technet.microsoft.com/en-us/security/bulletin/ms12-007)
