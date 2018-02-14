[`Microsoft.AspNet.Mvc.Core`](https://www.nuget.org/packages/Microsoft.AspNet.Mvc.Core) is the core runtime components of ASP.NET MVC.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks via the `System.Web.Mvc.dll` in Microsoft ASP.NET Model View Controller (MVC).

> The vulnerability could allow security feature bypass if an attacker convinces a user to click a specially crafted link or to visit a webpage that contains specially crafted content designed to exploit the vulnerability. In a web-based attack scenario, an attacker could host a specially crafted website that is designed to exploit the vulnerability through a web browser, and then convince a user to view the website. The attacker could also take advantage of compromised websites and websites that accept or host user-provided content or advertisements. These websites could contain specially crafted content that could exploit the vulnerability. In all cases, however, an attacker would have no way to force users to view the attacker-controlled content. Instead, an attacker would have to convince users to take action, typically by getting them to click a link in an email message or in an Instant Messenger message that takes them to the attacker's website, or by getting them to open an attachment sent through email.
 - Microsoft Security Bulletin MS14-059

## Details
Cross-site Scripting (XSS) attacks occur when an attacker tricks a user’s browser to execute malicious JavaScript code in the context of a victim’s domain. Such scripts can steal the user’s session cookies for the domain, scrape or modify its content, and perform or modify actions on the user’s behalf, actions typically blocked by the browser’s Same Origin Policy.

These attacks are possible by escaping the context of the web application and injecting malicious scripts in an otherwise trusted website. These scripts can introduce additional attributes (say, a "new" option in a dropdown list or a new link to a malicious site) and can potentially execute code on the clients side, unbeknown to the victim. This occurs when characters like \< \> \" \' are not escaped properly.

There are a few types of XSS:
- **Persistent XSS** is an attack in which the malicious code persists into the web app’s database.
- **Reflected XSS** is an which the website echoes back a portion of the request. The attacker needs to trick the user into clicking a malicious link (for instance through a phishing email or malicious JS on another page), which triggers the XSS attack.
- **DOM-based XSS** is an that occurs purely in the browser when client-side JavaScript echoes back a portion of the URL onto the page. DOM-Based XSS is notoriously hard to detect, as the server never gets a chance to see the attack taking place.

## Remediation
Upgrade `Microsoft.AspNet.Mvc.Core` to versions 2.0.60814.0, 3.0.50813.1, 4.0.40804.0, 5.0.20821.0, 5.1.20821.0 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/2014-4075)
- [Microsoft Security Advisory](http://technet.microsoft.com/security/bulletin/MS14-059)
