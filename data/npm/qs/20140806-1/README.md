## Overview
The qs module does not have an option or default for specifying object depth and, when parsing a string representing a deeply nested object, will block the event loop for long periods of time. An attacker could leverage this to cause a temporary denial-of-service condition, for example in a web application, other requests would not be processed while this blocking is occurring.

_Source: [Node Security Project](https://nodesecurity.io/advisories/28)_

## Remediation
Update qs to version 1.0.0 or greater.

## References
https://nodesecurity.io/advisories/28
