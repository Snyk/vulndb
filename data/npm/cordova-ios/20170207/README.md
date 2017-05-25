## Overview
[`cordova-ios`](https://www.npmjs.com/package/cordova-ios) is an iOS application library that allows for Cordova-based projects to be built for the iOS Platform.

Affected versions of the package are vulnerable to Open Redirection. The `loadUrl()` function may redirect a valid URL to an untrusted site, leading to phishing attempts to steal user credentials.

## Remediation
There is no fix version for `cordova-ios`.

## References
[Jira Issue](https://issues.apache.org/jira/browse/CB-12430)
