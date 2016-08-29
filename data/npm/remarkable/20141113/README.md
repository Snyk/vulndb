## Overview

Certain input when passed into remarkable will bypass the bad prototcol check that disallows the javascript: scheme allowing for javascript: url's to be injected into the rendered content.

_Source: [Node Security Project](https://nodesecurity.io/advisories/30)_

## Details

**Example:**

```
[link](<javascript:alert(1)>)
```
This will be turned into `<a href="javascript:alert(1)">link</a>`

where as

```
[link](javascript:alert(1))
```

Would be rendered as `[link](javascript:alert(1))` because it's an invalid scheme.

## Remediation

Upgrade to version 1.4.1 or greater

## References

- https://github.com/jonschlinkert/remarkable/issues/97
