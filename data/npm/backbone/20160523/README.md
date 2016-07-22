## Overview
backbone is a module that adds in structure to a JavaScript heavy application through key-value pairs and custom events connecting to your RESTful API through JSON

`backbone` is the npm package for Backbone.js, which uses key-value binding and custom events to connects existing API over a RESTful JSON interface.

Backbone has a security control in its `Escape` function, which performs HTML encoding. However, the regex is incomplete, notably not properly handling cases such as HTML entities (e.g. not treating `&#60` as `<`). HTML Entities are often overlooked by HTML Encoding security controls, you can read more detail about a similar one in the [`Marked` package](https://snyk.io/blog/marked-xss-vulnerability/)

This exposes a Cross-Site Scripting (XSS) vulnerability if users can influence the input provided.

## Remediation
Upgrade to version `0.5.0` or higher.

## References
- https://github.com/jashkenas/backbone/compare/0.3.3...0.5.0#diff-0d56d0d310de7ff18b3cef9c2f8f75dcL1008
- backbonejs.org/#changelog
- https://snyk.io/blog/marked-xss-vulnerability/

