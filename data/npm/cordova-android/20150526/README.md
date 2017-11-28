## Overview
[`cordova-android`](https://www.npmjs.com/package/cordova-android) is an Android application library that allows for Cordova-based projects to be built for the Android Platform.

Affected versions of the package are vulnerable to Arbitrary Command Injection.
Apache Cordova Android before 3.7.2 and 4.x before 4.0.2, when an application does not set explicit values in config.xml, allows remote attackers to modify undefined secondary configuration variables (preferences) via a crafted intent: URL.

## Remediation
Upgrade `cordova-android` to version 3.7.2 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2015-1835)
- [Cordova Announcement](https://cordova.apache.org/announcements/2015/05/26/android-402.html)
