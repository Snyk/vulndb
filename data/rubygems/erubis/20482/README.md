## Overview
[`erubis`](https://rubygems.org/gems/erubis) is an implementation of eRuby and has the following features:

Affected versions of the package are vulnerable to Cross-site Scripting (XSS). Single quotes were not properly escaped in the `helper.rb` and `helpers/rails_helper.rb` files. The [Erubis Documentation](http://www.kuwata-lab.com/erubis/users-guide.05.html) shows missing escaping.

## Details
Cross-Site Scripting (XSS) attacks occur when an attacker tricks a user’s browser to execute malicious JavaScript code in the context of a victim’s domain. Such scripts can steal the user’s session cookies for the domain, scrape or modify its content, and perform or modify actions on the user’s behalf, actions typically blocked by the browser’s Same Origin Policy.

These attacks are possible by escaping the context of the web application and injecting malicious scripts in an otherwise trusted website. These scripts can introduce additional attributes (say, a "new" option in a dropdown list or a new link to a malicious site) and can potentially execute code on the clients side, unbeknown to the victim. This occurs when characters like \< \> \" \' are not escaped properly.

There are a few types of XSS:
- **Persistent XSS** is an attack in which the malicious code persists into the web app’s database.
- **Reflected XSS** is an which the website echoes back a portion of the request. The attacker needs to trick the user into clicking a malicious link (for instance through a phishing email or malicious JS on another page), which triggers the XSS attack.
- **DOM-based XSS** is an that occurs purely in the browser when client-side JavaScript echoes back a portion of the URL onto the page. DOM-Based XSS is notoriously hard to detect, as the server never gets a chance to see the attack taking place.

## Remediation
There is no fix version for `erubis`.

## References
- [Erubis Documentation](http://www.kuwata-lab.com/erubis/users-guide.05.html)
- [GitHub PR](http://www.kuwata-lab.com/erubis/users-guide.05.html)
- [GitHub Issue](https://github.com/kwatch/erubis/blob/14d3eab57fbc361312c8f3af350cbf9a5bafce17/lib/erubis/helper.rb#L30)
- [GitHub Commit](https://github.com/kwatch/erubis/blob/14d3eab57fbc361312c8f3af350cbf9a5bafce17/lib/erubis/helpers/rails_helper.rb#L343)
