## Overview
`gmail-js` is a client side library for interacting with the Gmail API.

As part of its execution, the library dynamically creates functions out of response data, loaded into a `new Function(data)` call, and executes the function. The response data read is not encoded and may include user content (e.g. from the emails themselves), thus exposing a DOM-Based Cross-Site Scripting (DOMXSS) vulnerability.

At least three functions perform this vulnerable flow: `tools.parse_response`, `helper.get.visible_emails_post`, and `helper.get.email_data_post`.

## Remediation
Upgrade `gmail-js` to version 0.6.5 or higher.

## References
- [GitHub Issue](https://github.com/KartikTalwar/gmail.js/issues/281)
- [GitHub Commit](https://github.com/KartikTalwar/gmail.js/commit/82f1876bdc379531043d3f46ee19b338e8ec907d)
- [OWASP](https://www.owasp.org/index.php/DOM_Based_XSS)
