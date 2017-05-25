## Overview
[`cordova-ios`](https://www.npmjs.com/package/cordova-ios)  is an iOS application library that allows for Cordova-based projects to be built for the iOS Platform.

Affected versions of the package are vulnerable to Authorization bypass. Apache Cordova iOS contains 2 methods to bypass the URL access restrictions provided by the whitelist. An attacker can use any of the 2 methods to load malicious resources in an app that uses a whitelist to only load trusted resources.

## Remediation
Upgrade `cordova-ios` to version 4.0.0 or higher.

## References
- [Github PR](https://github.com/apache/cordova-ios/pull/116)
- [Github Commit](https://github.com/apache/cordova-ios/commit/a14e08eaa95211450f513c64d569d8c333dee4c5)
- [OSS Security](http://seclists.org/oss-sec/2016/q2/155)
