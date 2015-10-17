## Overview:
Marked comes with an option to sanitize user output to help protect against content injection attacks.

sanitize: true

Even if this option is set, marked is vulnerable to content injection in multiple locations if untrusted user input is allowed to be provided into marked and that output is passed to the browser.

Injection is possible in two locations
- gfm codeblocks (language)
- javascript url's

_Original description taken from the [Node Security Project](https://nodesecurity.io/)_

## Recommendations:
- Upgrade to version 0.3.1 or later
