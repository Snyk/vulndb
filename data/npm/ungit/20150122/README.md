## Overview
Due to the use of `child_process.exec` when executing git commands, ungit allows for commands to be injection from user input fields that end up in an executed git command.

_Source: [Node Security Project](https://nodesecurity.io/advisories/40)_

## Remediation

Update to the version >=0.9.0

## References
- https://nodesecurity.io/advisories/40
- https://github.com/FredrikNoren/ungit/issues/486
