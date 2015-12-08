## Overview
Untrusted input passed in to the hubot-scripts/package/src/scripts/email.coffee module can allow for command injection. This may be unexpected behavior for the caller.

_Source: [Node Security Project](https://nodesecurity.io/advisories/13)_

## Details
**Mitigating Factors:**

The email script is not enabled by default, it has to be manually added to hubot's list of loaded scripts.

## Remediation
Upgrade hubot-scripts to version 2.4.4 or greater. Use the [latest version on npm](https://www.npmjs.com/package/hubot-scripts).

## References
https://nodesecurity.io/advisories/13
