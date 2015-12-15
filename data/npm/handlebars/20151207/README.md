## Overview
When using attributes without quotes in a handlebars template, an attacker can manipulate the input to introduce additional attributes, potentially executing code. This may lead to a Cross-Site Scripting (XSS) vulnerability, assuming an attacker can influence the value entered into the template. If the handlebars template is used to render user-generated content, this vulnerability may escalate to a persistent XSS vulnerability.

## Example
For example, assume handlebars was used to display user comments, using the following template: 
`<a href={{email}}>{{name}}</a><pre>{{comment}}</pre>`

If an attacker spoofed his email address and provided the following value: 
`jane@evil.org onload=alert(document.cookie)`

The resulting HTML would be: 
`<a href=wizard@evil.org onload=alert(document.cookie)>Evil Wizard</a><pre>Busted!</pre>`

## References
- https://nodesecurity.io/advisories/61
- https://github.com/wycats/handlebars.js/commit/83b8e846a3569bd366cf0b6bdc1e4604d1a2077e
- https://blog.srcclr.com/handlebars_vulnerability_research_findings/
