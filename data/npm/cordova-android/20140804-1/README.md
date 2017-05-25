## Overview
[`cordova-android`](https://www.npmjs.com/package/cordova-android) is an Android application library that allows for Cordova-based projects to be built for the Android Platform.

Affected versions of the package are vulnerable to HTTP Whiteist Bypass. This allows remote attackers to bypass the HTTP whitelist and connect to arbitrary servers by using JavaScript to open WebSocket connections through WebView.

## Remediation
Upgrade `cordova-android` to version 3.5.1 or higher.

## References
- [Cordova Announcement](http://cordova.apache.org/announcements/2014/08/04/android-351.html)
