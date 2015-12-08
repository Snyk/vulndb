## Overview
When relying on the root option to restrict file access it may be possible for an application consumer to escape out of the restricted directory and access files in a similarly named directory. For example, `static(_dirname + '/public')` would allow access to `_dirname + '/public-restricted'`.

_Source: [Node Security Project](https://nodesecurity.io/advisories/32)_

## Remediation
Upgrade to a version greater than or equal to 0.8.4.

## References
- https://nodesecurity.io/advisories/32
- https://github.com/visionmedia/send/pull/59
- https://github.com/visionmedia/send/commit/9c6ca9b2c0b880afd3ff91ce0d211213c5fa5f9a
