## Overview
[`passport-azure-ad`](https://www.npmjs.com/package/passport-azure-ad) is a OIDC and Bearer Passport strategies for Azure Active Directory.
The package mishandles ID token validation, allowing an attacker to create a specifically crafted token to the targeted host web application, containing valid user identities. With this flaw, the attacker bypasses the authentication to the hosts web application.


## Remediation
Upgrade `passport-azure-ad` to version 1.4.6 or version 2.0.1 or higher, excluding version 2.0.0.


## References
- [Microsoft Support](https://support.microsoft.com/en-us/kb/3187742)
- [Github Security Notice]( https://github.com/AzureAD/passport-azure-ad/blob/master/SECURITY-NOTICE.MD)
- [CVE](http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-7191)
