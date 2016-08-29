## Overview
When using attributes without quotes in a mustache template, an attacker can manipulate the input to introduce additional attributes, potentially executing code. This may lead to a Cross-Site Scripting (XSS) vulnerability, assuming an attacker can influence the value entered into the template. If the mustache template is used to render user-generated content, this vulnerability may escalate to a persistent XSS vulnerability.

## Example
For example, assume mustache was used to display user comments, using the following template: 
`<a href={{email}}>{{name}}</a><pre>{{comment}}</pre>`

If an attacker spoofed his email address and provided the following value: 
`jane@evil.org onload=alert(document.cookie)`

The resulting HTML would be: 
`<a href=wizard@evil.org onload=alert(document.cookie)>Evil Wizard</a><pre>Busted!</pre>`

## References

- https://github.com/janl/mustache.js/commit/378bcca8a5cfe4058f294a3dbb78e8755e8e0da5
