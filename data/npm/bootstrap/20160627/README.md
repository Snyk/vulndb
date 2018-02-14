## Overview
[`bootstrap`](https://www.npmjs.com/package/bootstrap) is an sleek, intuitive, and powerful front-end framework for faster and easier web development.

Affected versions of this package are vulnerable to Cross-Site Scripting (XSS) attacks via the `data-target` attribute.

## Details
Cross-Site Scripting (XSS) attacks occur when an attacker tricks a user’s browser to execute malicious JavaScript code in the context of a victim’s domain. Such scripts can steal the user’s session cookies for the domain, scrape or modify its content, and perform or modify actions on the user’s behalf, actions typically blocked by the browser’s Same Origin Policy.

These attacks are possible by escaping the context of the web application and injecting malicious scripts in an otherwise trusted website. These scripts can introduce additional attributes (say, a "new" option in a dropdown list or a new link to a malicious site) and can potentially execute code on the clients side, unbeknown to the victim. This occurs when characters like \< \> \" \' are not escaped properly.

There are a few types of XSS:
- **Persistent XSS** is an attack in which the malicious code persists into the web app’s database.
- **Reflected XSS** is an which the website echoes back a portion of the request. The attacker needs to trick the user into clicking a malicious link (for instance through a phishing email or malicious JS on another page), which triggers the XSS attack.
- **DOM-based XSS** is an that occurs purely in the browser when client-side JavaScript echoes back a portion of the URL onto the page. DOM-Based XSS is notoriously hard to detect, as the server never gets a chance to see the attack taking place.

## Remediation
The vulnerability has been fixed in versions `3.4.0` and `4.0.0-beta.2` but these versions haven't been released to npm as of Jan 19th, 2018.

## References
- [Github Issue](https://github.com/twbs/bootstrap/issues/20184)
- [Github PR v4](https://github.com/twbs/bootstrap/pull/23679)
- [Github Commit v4](https://github.com/twbs/bootstrap/commit/9612830701211d757ff95ceccbb494fd2e7ee17e)
- [Github PR v3](https://github.com/twbs/bootstrap/pull/23687)
- [Github Commit v3](https://github.com/twbs/bootstrap/pull/23687/commits/d9be1da55bf0f94a81e8a2c9acf5574fb801306e)
