## Overview
[marked](https://www.npmjs.com/package/marked) is a markdown parser and compiler used for rendering markdown content to html. It is vulnerable to content injection attack allowing the attacker to bypass its output sanitization (`sanitize: true`) protection. Using the [HTML Coded Character Set](https://www.w3.org/MarkUp/html-spec/html-spec_13.html#SEC13), attackers can inject `javascript:` code snippets into the output. For example, the following input `javascript&#x58document;alert&#40;1&#41;`  will result in `alert(1)` being executed when the user clicks on the link.

## Remediation
There's no official fix available yet, but there's an outstanding [pull-request](https://github.com/chjj/marked/pull/592) that fixes the issue. Alternatively you can use [remarkable](https://www.npmjs.com/package/remarkable) or other markdown library.
Meanwhile, Snyk research team is working on providing patches for this vulnerability.

## References
- https://github.com/chjj/marked/pull/592
- https://github.com/chjj/marked/pull/592/commits/2cff85979be8e7a026a9aca35542c470cf5da523

