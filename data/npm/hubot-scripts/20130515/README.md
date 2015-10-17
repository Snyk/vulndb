## Overview:
Untrusted input passed in to the hubot-scripts/package/src/scripts/email.coffee module can allow for command injection. This may be unexpected behavior for the caller.

_Original description taken from the [Node Security Project](https://nodesecurity.io/)_

### Mitigating Factors
The email script is not enabled by default, it has to be manually added to hubot's list of loaded scripts.

## Recommendations:
A new version containing a fix has yet to be pushed to NPM. Use the version located at https://github.com/github/hubot-scripts/ until version 2.4.4 comes out.
