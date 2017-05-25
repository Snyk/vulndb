## Overview
[`middleman-core`](https://rubygems.org/gems/middleman-core) is A static site generator. Provides dozens of templating languages (Haml, Sass, Compass, Slim, CoffeeScript, and more). Makes minification, compression, cache busting, Yaml data (and more) an easy part of your development cycle..
When using user input to perform tasks on the server, characters like \< \> \" \' must escaped properly. Otherwise, an attacker can manipulate the input to introduce additional attributes, potentially executing code. This may lead to a Cross-Site Scripting (XSS) vulnerability, assuming an attacker can influence the value entered into the template.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `middleman-core` to version 4.1.2 or higher.

## References
- [Github PR](https://github.com/middleman/middleman/pull/1805)

- [Github Commit](https://github.com/middleman/middleman/commit/b7886aa14cd68a6a3a7b02c7777b5922de4280f1)
