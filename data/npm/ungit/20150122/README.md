## Overview:
Due to the use of `child_process.exec` when executing git commands, ungit allows for commands to be injection from user input fields that end up in an executed git command.

_Original description taken from the [Node Security Project](https://nodesecurity.io/)_

## Recommendations:

Update to the version >=0.9.0

## References:
- https://github.com/FredrikNoren/ungit/issues/486
