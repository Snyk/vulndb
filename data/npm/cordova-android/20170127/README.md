## Overview
[cordova-android](https://github.com/apache/cordova-android) is an Android application library that allows for Cordova-based projects to be built for the Android Platform.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol.

The build scripts would fetch Gradle using HTTP instead of HTTPS

Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
Upgrade `cordova-android` to version 6.1.2 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-3160)
- [Cordova Blog](https://cordova.apache.org/announcements/2017/01/27/android-612.html)
- [Security Focus](https://www.securityfocus.com/bid/95838)
