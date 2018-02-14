## Overview
[`geminabox`](https://rubygems.org/gems/geminabox) is a sinatra based gem hosting app, with client side gem push style functionality.

Affected versions of the package are vulnerable to Stored Cross-site Scripting (XSS) attacks.
An attackers may be able to inject arbitrary web script via a crafted JavaScript URL in the `homepage` value of a `.gemspec` file.
A `.gemspec` file must be created with a JavaScript URL in the homepage value. This can be used to build a gem for upload to the Geminabox server, in order to achieve stored XSS via the gem hyperlink.

## Details
Cross-site Scripting (XSS) attacks occur when an attacker tricks a user’s browser to execute malicious JavaScript code in the context of a victim’s domain. Such scripts can steal the user’s session cookies for the domain, scrape or modify its content, and perform or modify actions on the user’s behalf, actions typically blocked by the browser’s Same Origin Policy.

These attacks are possible by escaping the context of the web application and injecting malicious scripts in an otherwise trusted website. These scripts can introduce additional attributes (say, a "new" option in a dropdown list or a new link to a malicious site) and can potentially execute code on the clients side, unbeknown to the victim. This occurs when characters like \< \> \" \' are not escaped properly.

There are a few types of XSS:
- **Persistent\Stored XSS** is an attack in which the malicious code persists into the web app’s database.
- **Reflected XSS** is an which the website echoes back a portion of the request. The attacker needs to trick the user into clicking a malicious link (for instance through a phishing email or malicious JS on another page), which triggers the XSS attack.
- **DOM-based XSS** is an that occurs purely in the browser when client-side JavaScript echoes back a portion of the URL onto the page. DOM-Based XSS is notoriously hard to detect, as the server never gets a chance to see the attack taking place.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/xss-attacks-the-next-wave/).

## Remediation
Upgrade `geminabox` to version 0.13.10 or higher.

## References
- [GitHub PR](https://github.com/geminabox/geminabox/blob/master/CHANGELOG.md#01310-2017-11-13)
- [GitHub Issue](https://github.com/geminabox/geminabox/pull/289)
- [GitHub Commit](https://github.com/geminabox/geminabox/commit/e7e0b16147677e9029f0b55eff6bc6dda52398d4)
