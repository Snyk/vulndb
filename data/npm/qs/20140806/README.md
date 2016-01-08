## Overview
During parsing, the qs module may create a sparse area (an array where not elements are filled), and grow that array to the necessary size based on the indices used on it. An attacker can specify a high index value in a query string, thus making the server allocate a respectively big array. Truly large values can cause the server to run out of memory and cause it to crash - thus enabling a Denial-of-Service attack.

## Remediation
Upgrade qs to version 1.0.0 or greater. In these versions, qs introduced a low limit on the index value, preventing such an attack

## References
- https://nodesecurity.io/advisories/29
- https://github.com/visionmedia/node-querystring/issues/104

