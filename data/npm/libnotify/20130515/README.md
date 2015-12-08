## Overview
Untrusted input passed in the call to libnotify.notify could result in execution of shell commands. Callers may be unaware of this.

_Source: [Node Security Project](https://nodesecurity.io/advisories/20)_

## Details

**Example:**

```
var libnotify = require('libnotify')
libnotify.notify('UNTRUSTED INPUT', { title: \"\" }, function () {
    console.log(arguments);
})
```
## References
- https://nodesecurity.io/advisories/20

Special thanks to Neal Poole for submitting the pull request to fix this issue.
