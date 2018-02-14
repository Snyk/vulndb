## Overview
[`pypiserver`](https://pypi.python.org/pypi/pypiserver)is a minimal PyPI server for use with pip/easy_install.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks.

## Details
Cross-site Scripting (XSS) attacks occur when an attacker tricks a user’s browser to execute malicious JavaScript code in the context of a victim’s domain. Such scripts can steal the user’s session cookies for the domain, scrape or modify its content, and perform or modify actions on the user’s behalf, actions typically blocked by the browser’s Same Origin Policy.

These attacks are possible by escaping the context of the web application and injecting malicious scripts in an otherwise trusted website. These scripts can introduce additional attributes (say, a "new" option in a dropdown list or a new link to a malicious site) and can potentially execute code on the clients side, unbeknown to the victim. This occurs when characters like \< \> \" \' are not escaped properly.

There are a few types of XSS:
- **Persistent XSS** is an attack in which the malicious code persists into the web app’s database.
- **Reflected XSS** is an which the website echoes back a portion of the request. The attacker needs to trick the user into clicking a malicious link (for instance through a phishing email or malicious JS on another page), which triggers the XSS attack.
- **DOM-based XSS** is an that occurs purely in the browser when client-side JavaScript echoes back a portion of the URL onto the page. DOM-Based XSS is notoriously hard to detect, as the server never gets a chance to see the attack taking place.


## References
- [Github ChangeLog](https://github.com/pypiserver/pypiserver/blob/master/CHANGES.rst#117-2015-03-8)
- [Github Issue](https://github.com/pypiserver/pypiserver/issues/77)
- [Github PR](https://github.com/pypiserver/pypiserver/pull/78)
- [Github Commit](https://github.com/pypiserver/pypiserver/commit/744282d5c22d2f573115b6c98844bded8533a516)
