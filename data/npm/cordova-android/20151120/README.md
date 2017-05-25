## Overview
[`cordova-android`](https://www.npmjs.com/package/cordova-android) is an Android application library that allows for Cordova-based projects to be built for the Android Platform.

Affected versions of the package are vulnerable to Insecure Randomness. It improperly generates random values for BridgeSecret data, which makes it easier for attackers to conduct bridge hijacking attacks by predicting a value.

## Remediation
Upgrade `cordova-android` to version 3.7.1 or higher.

## References
- [Cordova Announcement](https://cordova.apache.org/announcements/2015/11/20/security.html)
