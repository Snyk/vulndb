## Overview
[`cordova-android`](https://www.npmjs.com/package/cordova-android) is an Android application library that allows for Cordova-based projects to be built for the Android Platform.

Affected versions of the package are vulnerable to Arbitrary Code Execution. When an application relies on a remote server, improperly implements a JavaScript whitelist protection mechanism. This allows attackers to bypass intended access restrictions via a crafted URI.

## Remediation
Upgrade `cordova-android` to version 4.1.1 or higher.

## References
- [[Cordova Announcement](https://cordova.apache.org/announcements/2015/11/20/security.html)
