## Overview
[`redis-commander`](https://www.npmjs.com/package/redis-commander) is a Redis management tool written in node.js
 
Affected versions of this package are vulnerable to Reflected Cross-Site Scripting (XSS) via the `clipboard.swf` component.

An attacker may input a crafted XXX in the `highlighterId` parameter of the clipboard.swf component, causing a Reflected XSS on hosts serving Redis Commander.

Proof of concept by Yasin Soliman:

```
http://instance/jstree/_docs/syntax/clipboard.swf?highlighterId=\%22))}%20catch(e)%20{alert(document.domain);}//
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
There is no fix version for `redis-commander`.

## References
- [GitHub Issue](https://github.com/joeferner/redis-commander/issues/227)
- [HackerOne Report](https://hackerone.com/reports/296377)
