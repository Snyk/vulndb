## Overview
[org.apache.deltaspike.modules:jsf-module-project](https://github.com/apache/deltaspike) is a suite of portable CDI (Contexts & Dependency Injection) extensions intended to make application development easier when working with CDI and Java EE.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) due to insufficient escaping of special characters in the `windowId` handler. The default size of the `windowId` get's cut off after 10 characters (by default), so the impact is limited. 

## Details
Cross-Site Scripting (XSS) attacks occur when an attacker tricks a user's browser to execute malicious JavaScript code in the context of a victim's domain. Such scripts can steal the user's session cookies for the domain, scrape or modify its content, and perform or modify actions on the user's behalf, actions typically blocked by the browser's Same Origin Policy.

These attacks are possible by escaping the context of the web application and injecting malicious scripts in an otherwise trusted website. These scripts can introduce additional attributes (say, a "new" option in a dropdown list or a new link to a malicious site) and can potentially execute code on the clients side, unbeknown to the victim. This occurs when characters like \< \> \" \' are not escaped properly.

There are a few types of XSS:
- **Persistent XSS** is an attack in which the malicious code persists into the web app's database.
- **Reflected XSS** is an which the website echoes back a portion of the request. The attacker needs to trick the user into clicking a malicious link (for instance through a phishing email or malicious JS on another page), which triggers the XSS attack.
- **DOM-based XSS** is an that occurs purely in the browser when client-side JavaScript echoes back a portion of the URL onto the page. DOM-Based XSS is notoriously hard to detect, as the server never gets a chance to see the attack taking place.

## Remediation
Upgrade `org.apache.deltaspike.modules:jsf-module-project` to version 1.8.1 or higher.

## References
- [Jira Issue](https://issues.apache.org/jira/browse/DELTASPIKE-1307)
- [GitHub Commit](https://github.com/apache/deltaspike/commit/72e607f3be66c30c72b32c24b44e9deaa8e54608#diff-fb7df4f2006dba61bb28d781dc516974)
