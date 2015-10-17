## Overview:
The qs module has the ability to create sparse arrays during parsing. By specifying a high index it is possible to create a large array that will eventually take up all the allocated memory of the running process, resulting in a crash.

_Original description taken from the [Node Security Project](https://nodesecurity.io/)_

## Recommendations:
Update qs to version 1.0.0 or greater

## References:
- https://github.com/visionmedia/node-querystring/issues/104

