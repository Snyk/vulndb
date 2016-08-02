## Overview
Sanitization of HTML strings is not applied recursively to input, allowing an attacker to potentially inject script and other markup.

Source: _Node Security Project_

## Remediation
Upgrade `sanitize-html` to `1.4.3` or later

## References
- https://github.com/punkave/sanitize-html/issues/29
- https://github.com/punkave/sanitize-html/commit/762fbc7bba389f3f789cc291c1eb2b64f60f2caf

