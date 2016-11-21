## Overview
[`marked`](https://www.npmjs.com/package/marked) is a markdown parser and compiler used for rendering markdown content to html. It is vulnerable to content injection attack allowing the attacker to bypass its output sanitization (`sanitize: true`) protection. Using the [HTML Coded Character Set](https://www.w3.org/MarkUp/html-spec/html-spec_13.html#SEC13), attackers can inject `javascript:` code snippets into the output. For example, the following input `javascript&#x58document;alert&#40;1&#41;`  will result in `alert(1)` being executed when the user clicks on the link.

## Remediation
Upgrade `marked` to version 0.3.6 or higher.
Also, you can patch the vulnerability using [Snyk wizard](https://snyk.io/docs/using-snyk/#wizard). Alternatively you can use `remarkable` or other markdown libraries.

## References
- [Github PR](https://github.com/chjj/marked/pull/592)
- [Github Commit](https://github.com/chjj/marked/pull/592/commits/2cff85979be8e7a026a9aca35542c470cf5da523)
