## Overview
[`cordova-plugin-inappbrowser`](https://www.npmjs.com/package/cordova-plugin-inappbrowser) is a cordova InAppBrowser Plugin.

Affected versions of the package are vulnerable to Privilege Escalation.
The CDVInAppBrowser class in the Apache Cordova In-App-Browser standalone plugin (org.apache.cordova.inappbrowser) before 0.3.2 for iOS and the In-App-Browser plugin for iOS from Cordova 2.6.0 through 2.9.0 does not properly validate callback identifiers, which allows remote attackers to execute arbitrary JavaScript in the host page and consequently gain privileges via a crafted gap-iab: URI.

## Remediation
Upgrade `cordova-plugin-inappbrowser` to version 0.3.2 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2014-0073)
- [Github Commit](https://github.com/apache/cordova-plugin-inappbrowser/commit/26702cb0720c5c394b407c23570136c53171fa55)
- [D3adend Blog](http://d3adend.org/blog/?p=403)
