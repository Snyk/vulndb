## Overview
The `jsjws` is a pure JavaScript implementation of JSON Web Signature. JSON Web Tokens are an open, industry standard method for representing claims securely between two parties.

Affected versions of this module treated tokens signed with the `none` algorithm as a valid token with a verified signature and resulted in giving attackers arbitrary account access.

## Remediation
Upgrade `jsjws` to version 2.0.0 or higher.

## References
- [GitHub Issue](https://github.com/kjur/jsjws/issues/25)
- [jwt Algorithm](https://www.chosenplaintext.ca/2015/03/31/jwt-algorithm-confusion.html)
- [jwt](https://jwt.io/)
- [GitHub Commit](https://github.com/davedoesdev/node-jsjws/commit/ac456b5f9bb96695f1dd838acc8f089154b2da04)
