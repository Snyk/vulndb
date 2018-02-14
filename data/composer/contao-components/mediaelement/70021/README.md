# Overview
Affected versions of [`contao-components/mediaelement`](https://packagist.org/packages/contao-components/mediaelement) are vulnerable to Cross-site Scripting (XSS).

Cross-site Scripting (XSS) vulnerability in flash/FlashMediaElement.as in MediaElement.js before 2.21.0, as used in WordPress before 4.5.2, allows remote attackers to inject arbitrary web script or HTML via an obfuscated form of the jsinitfunction parameter, as demonstrated by "jsinitfunctio%gn."

Cross-site Scripting (XSS) attacks occur when an attacker tricks a user’s browser to execute malicious JavaScript code in the context of a victim’s domain. Such scripts can steal the user’s session cookies for the domain, scrape or modify its content, and perform or modify actions on the user’s behalf, actions typically blocked by the browser’s Same Origin Policy.

These attacks are possible by escaping the context of the web application and injecting malicious scripts in an otherwise trusted website. These scripts can introduce additional attributes (say, a "new" option in a dropdown list or a new link to a malicious site) and can potentially execute code on the clients side, unbeknown to the victim. This occurs when characters like \< \> \" \' are not escaped properly.

There are a few types of XSS:
- **Persistent XSS** is an attack in which the malicious code persists into the web app’s database.
- **Reflected XSS** is an which the website echoes back a portion of the request. The attacker needs to trick the user into clicking a malicious link (for instance through a phishing email or malicious JS on another page), which triggers the XSS attack.
- **DOM-based XSS** is an that occurs purely in the browser when client-side JavaScript echoes back a portion of the URL onto the page. DOM-Based XSS is notoriously hard to detect, as the server never gets a chance to see the attack taking place.

## Remediation
Upgrade `contao-components/mediaelement` to version 2.21.1 or higher.

## References
- [Contao Release Note](https://contao.org/en/news/contao-3_5_15.html)
- [Github Commit](https://github.com/contao/core/commit/4d42a56531c82598436d5102fac94721ea99ad49)
