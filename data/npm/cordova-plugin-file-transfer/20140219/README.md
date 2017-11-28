## Overview
[`cordova-plugin-file-transfer`](https://www.npmjs.com/package/cordova-plugin-file-transfer) is a cordova File Transfer Plugin.

Affected version of this package are vulnerable to Insecure Defaults.
ios/CDVFileTransfer.m in the Apache Cordova File-Transfer standalone plugin (org.apache.cordova.file-transfer) before 0.4.2 for iOS and the File-Transfer plugin for iOS from Cordova 2.4.0 through 2.9.0 might allow remote attackers to spoof SSL servers by leveraging a default value of true for the trustAllHosts option.

## Details
When deciding on the default configuration, the package owner must take into consideration both usability and security, based on reasonable assumptions to how their package will be used. But more often then not, package consumers do not abide by said assumptions and this may open their hosting server to attacks by malicious users.

You can read more about `Insecure Defaults` on our [blog](https://snyk.io/blog/mongodb-hack-and-secure-defaults/).

## Remediation
Upgrade `cordova-plugin-file-transfer` to version 0.4.2 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2014-0072)
- [Github Commit](https://github.com/apache/cordova-plugin-file-transfer/commit/a1d6fc07e8a40c1b2b16f4103c403b30e1089668)
- [Seclists](http://seclists.org/fulldisclosure/2014/Mar/29)
