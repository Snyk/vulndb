## Overview
When using attributes without quotes in a handlebars template, an attacker can manipulate the input to introduce additional attributes, potentially executing code. This may lead to a Cross-Site Scripting (XSS) vulnerability, assuming an attacker can influence the value entered into the template. If the handlebars template is used to render user-generated content, this vulnerability may escalate to a persistent XSS vulnerability.

## Details

**Example:**

Assume handlebars was used to display user comments and avatar, using the following template: 
`<img src={{avatarUrl}}><pre>{{comment}}</pre>`

If an attacker spoofed their avatar URL and provided the following value: 
`http://evil.org/avatar.png onload=alert(document.cookie)`

The resulting HTML would be the following, triggering the script once the image loads:
`<img src=http://evil.org/avatar.png onload=alert(document.cookie)><pre>Gotcha!</pre>`

## References
- https://nodesecurity.io/advisories/61
- https://github.com/wycats/handlebars.js/commit/83b8e846a3569bd366cf0b6bdc1e4604d1a2077e
