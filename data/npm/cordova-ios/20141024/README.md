## Overview
[`cordova-ios`](https://www.npmjs.com/package/cordova-ios) is an iOS application library that allows for Cordova-based projects to be built for the iOS Platform.

Affected versions of the package are vulnerable to Arbitrary Code Execution. A malicious plugin can be executed when a user clicks on a link.

## Remediation
Upgrade `cordova-ios` to version 4.0.0 or higher.

## References
- [Github Commit](https://github.com/apache/cordova-ios/commit/c52e7ecf687c7fb310f696fdb81ec56122f732c8)
- [OSS Security](http://seclists.org/oss-sec/2016/q2/154)
