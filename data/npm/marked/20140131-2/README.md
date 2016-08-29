## Overview

Marked 0.3.2 and earlier is vulnerable to content injection even when `sanitize: true` is enabled.

`[xss link](vbscript:alert(1&#41;)`

will get a link

`<a href="vbscript:alert(1)">xss link</a>`

This script does not work in IE 11 edge mode, but works in IE 10 compatibility view.

_Source: [Node Security Project](https://nodesecurity.io/advisories/24)_

## Remediation

Upgrade to version 0.3.3 or greater.

## References

- https://github.com/chjj/marked/issues/492
