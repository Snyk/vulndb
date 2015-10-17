## Overview:
Untrusted input passed in the call to libnotify.notify could result in execution of shell commands. Callers may be unaware of this.

_Original description taken from the [Node Security Project](https://nodesecurity.io/)_

### Example
```
var libnotify = require('libnotify')
libnotify.notify('UNTRUSTED INPUT', { title: \"\" }, function () {
    console.log(arguments);
})
```

Special thanks to Neal Poole for submitting the pull request to fix this issue.
