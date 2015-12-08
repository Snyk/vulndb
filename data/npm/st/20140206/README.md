## Overview
Versions prior to 0.2.5 did not properly prevent folder traversal. Literal dots in a path were resolved out, but url encoded dots were not. Thus, a request like ``` /%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/etc/passwd ``` would leak sensitive data from the server.

As of version 0.2.5, any ```'/../'``` in the request path, urlencoded or not, will be replaced with ```'/'```. If your application depends on url traversal, then you are encouraged to please refactor so that you do not depend on having ```..``` in url paths, as this tends to expose data that you may be surprised to be exposing.

_Source: [Node Security Project](https://nodesecurity.io/advisories/36)_

## Remediation
Upgrade to version 0.2.5 or greater.

## References
- https://nodesecurity.io/advisories/36
- https://github.com/isaacs/st#security-status
