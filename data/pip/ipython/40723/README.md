## Overview
Affected versions of [`ipython`](https://pypi.python.org/pypi/ipython) are vulnerable to Cross-Site Scripting (XSS) attacks.

Cross-site scripting (XSS) vulnerability in the file browser in notebook/notebookapp.py in IPython Notebook before 3.2.2 and Jupyter Notebook 4.0.x before 4.0.5 allows remote attackers to inject arbitrary web script or HTML via a folder name. NOTE: this was originally reported as a cross-site request forgery (CSRF) vulnerability, but this may be inaccurate.

## Details
Cross-Site Scripting (XSS) attacks occur when an attacker tricks a user’s browser to execute malicious JavaScript code in the context of a victim’s domain. Such scripts can steal the user’s session cookies for the domain, scrape or modify its content, and perform or modify actions on the user’s behalf, actions typically blocked by the browser’s Same Origin Policy.

These attacks are possible by escaping the context of the web application and injecting malicious scripts in an otherwise trusted website. These scripts can introduce additional attributes (say, a "new" option in a dropdown list or a new link to a malicious site) and can potentially execute code on the clients side, unbeknown to the victim. This occurs when characters like \< \> \" \' are not escaped properly.

There are a few types of XSS:
- **Persistent XSS** is an attack in which the malicious code persists into the web app’s database.
- **Reflected XSS** is an which the website echoes back a portion of the request. The attacker needs to trick the user into clicking a malicious link (for instance through a phishing email or malicious JS on another page), which triggers the XSS attack.
- **DOM-based XSS** is an that occurs purely in the browser when client-side JavaScript echoes back a portion of the URL onto the page. DOM-Based XSS is notoriously hard to detect, as the server never gets a chance to see the attack taking place.

## Remediation
Upgrade `ipython` to version 3.2.2 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2015-6938)
- [Github Commit](https://github.com/ipython/ipython/commit/3ab41641cf6fce3860c73d5cf4645aa12e1e5892)
