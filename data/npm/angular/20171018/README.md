## Overview
[`angular`](https://www.npmjs.com/package/angular) is an HTML enhanced for web apps.

Affected versions of the package are vulnerable to Cross-site Scripting (XSS) via ideographic space chararcters in URIs.

Browsers mutate attributes values such as `&#12288;javascript:alert(1)` when they are written to the DOM via `innerHTML` in various vendor specific ways.
In Chrome (<62), this mutation removed the preceding "whitespace" resulting in a value that could end up being executed as JavaScript.

Here is an example of what could happen:

```js
// Code goes here
var h1 = document.querySelector('h1');
h1.innerHTML = '<a href="&#x3000;javascript:alert(1)">CLICKME</a>';
var innerHTML = h1.innerHTML;
console.log(innerHTML);
h1.innerHTML = innerHTML;
```

The sanitizer contains a bit of code that triggers this mutation on an inert piece of DOM, [before angular sanitizes it](https://github.com/angular/angular.js/blob/817ac567/src/ngSanitize/sanitize.js#L406-L417).

**Note:** Chrome 62 does not appear to mutate this particular string any more, instead it just leaves the "whitespace" in place. This probably means that Chrome 62 is no longer vulnerable to this specific attack vector.

## Details
Cross-Site Scripting (XSS) attacks occur when an attacker tricks a user’s browser to execute malicious JavaScript code in the context of a victim’s domain. Such scripts can steal the user’s session cookies for the domain, scrape or modify its content, and perform or modify actions on the user’s behalf, actions typically blocked by the browser’s Same Origin Policy.

These attacks are possible by escaping the context of the web application and injecting malicious scripts in an otherwise trusted website. These scripts can introduce additional attributes (say, a "new" option in a dropdown list or a new link to a malicious site) and can potentially execute code on the clients side, unbeknown to the victim. This occurs when characters like \< \> \" \' are not escaped properly.

There are a few types of XSS:
- **Persistent XSS** is an attack in which the malicious code persists into the web app’s database.
- **Reflected XSS** is an which the website echoes back a portion of the request. The attacker needs to trick the user into clicking a malicious link (for instance through a phishing email or malicious JS on another page), which triggers the XSS attack.
- **DOM-based XSS** is an that occurs purely in the browser when client-side JavaScript echoes back a portion of the URL onto the page. DOM-Based XSS is notoriously hard to detect, as the server never gets a chance to see the attack taking place.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/xss-attacks-the-next-wave/).

## Remediation
Upgrade `angular` to version 1.6.7 or higher.

## References
- [GitHub PR](https://github.com/angular/angular.js/pull/16311)
- [GitHub Issue](https://github.com/angular/angular.js/issues/16288)
- [GitHub Commit](https://github.com/angular/angular.js/commit/667db466f959f8bbca1451d0f1c1a3db25d46a6c)
