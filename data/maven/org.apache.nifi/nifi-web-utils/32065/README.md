## Overview
[Apache NiFi](https://nifi.apache.org) is a system to process and distribute data.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks. 
A malicious `X-ProxyContextPath` or `X-Forwarded-Context` header containing external resources or embedded code could cause remote code execution. 

## Details
Cross-Site Scripting (XSS) attacks occur when an attacker tricks a user’s browser to execute malicious JavaScript code in the context of a victim’s domain. Such scripts can steal the user’s session cookies for the domain, scrape or modify its content, and perform or modify actions on the user’s behalf, actions typically blocked by the browser’s Same Origin Policy.

These attacks are possible by escaping the context of the web application and injecting malicious scripts in an otherwise trusted website. These scripts can introduce additional attributes (say, a "new" option in a dropdown list or a new link to a malicious site) and can potentially execute code on the clients side, unbeknown to the victim. This occurs when characters like \< \> \" \' are not escaped properly.

There are a few types of XSS:
- **Persistent XSS** is an attack in which the malicious code persists into the web app’s database.
- **Reflected XSS** is an which the website echoes back a portion of the request. The attacker needs to trick the user into clicking a malicious link (for instance through a phishing email or malicious JS on another page), which triggers the XSS attack.
- **DOM-based XSS** is an that occurs purely in the browser when client-side JavaScript echoes back a portion of the URL onto the page. DOM-Based XSS is notoriously hard to detect, as the server never gets a chance to see the attack taking place.

## Remediation
Upgrade `Apache NiFi` to version 1.5.0 or higher.

## References
- [Apache NiFi Security Advisory](https://nifi.apache.org/security.html#CVE-2017-15697)
- [Jira Issue](https://issues.apache.org/jira/browse/NIFI-4501)
- [GitHub Issue](https://github.com/apache/nifi/pull/2279)
