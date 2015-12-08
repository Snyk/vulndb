## Overview
The qs module has the ability to create sparse arrays during parsing. By specifying a high index it is possible to create a large array that will eventually take up all the allocated memory of the running process, resulting in a crash.

_Source: [Node Security Project](https://nodesecurity.io/advisories/29)_

## Remediation
Upgrade qs to version 1.0.0 or greater.

## References
- https://nodesecurity.io/advisories/29
- https://github.com/visionmedia/node-querystring/issues/104

