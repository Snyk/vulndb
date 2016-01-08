## Overview
When parsing a string representing a deeply nested object, qs will block the event loop for long periods of time. Such a delay may hold up the server's resources, keeping it from processing other requests in the meantime, thus enabling a Denial-of-Service attack. 

## Remediation
Update qs to version 1.0.0 or greater. In these versions, qs enforces a max object depth (along with other limits), limiting the event loop length and thus preventing such an attack.

## References
https://nodesecurity.io/advisories/28
