## Overview
[ezsystems/ezpublish-legacy](https://packagist.org/packages/ezsystems/ezpublish-legacy) is a PHP application framework with advanced CMS (content management system) functionality.

Affected versions of this project are vulnerable to Cross-Site Scripting (XSS) attacks via the search module. 

## Details
Cross-Site Scripting (XSS) attacks occur when an attacker tricks a user’s browser to execute malicious JavaScript code in the context of a victim’s domain. Such scripts can steal the user’s session cookies for the domain, scrape or modify its content, and perform or modify actions on the user’s behalf, actions typically blocked by the browser’s Same Origin Policy.

These attacks are possible by escaping the context of the web application and injecting malicious scripts in an otherwise trusted website. These scripts can introduce additional attributes (say, a "new" option in a dropdown list or a new link to a malicious site) and can potentially execute code on the clients side, unbeknown to the victim. This occurs when characters like \< \> \" \' are not escaped properly.

There are a few types of XSS:
- **Persistent XSS** is an attack in which the malicious code persists into the web app’s database.
- **Reflected XSS** is an which the website echoes back a portion of the request. The attacker needs to trick the user into clicking a malicious link (for instance through a phishing email or malicious JS on another page), which triggers the XSS attack.
- **DOM-based XSS** is an that occurs purely in the browser when client-side JavaScript echoes back a portion of the URL onto the page. DOM-Based XSS is notoriously hard to detect, as the server never gets a chance to see the attack taking place.

## References
- [EZ Publish Security Advisory](http://share.ez.no/community-project/security-advisories/ezsa-2017-005-xss-issue-in-search)
- [GitHub Commit](https://github.com/ezsystems/ezpublish-legacy/commit/c7174295fa0b9bd81bd4af908082464b0b80f278)
